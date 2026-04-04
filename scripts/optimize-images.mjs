#!/usr/bin/env node
import sharp from 'sharp';
import { glob } from 'glob';
import { dirname, basename, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '../public');

// Image optimization configurations
const optimizations = [
  // Portfolio images - displayed at 380x380, optimize for 2x (760px max width)
  {
    pattern: 'project-*.webp',
    options: {
      maxWidth: 800,
      maxHeight: 600,
      quality: 75,
      effort: 6
    }
  },
  // Hero image - full width, optimize quality
  {
    pattern: 'hero-image.webp',
    options: {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 70,
      effort: 6
    }
  },
  // Service image - displayed at ~500px width
  {
    pattern: 'service-las.webp',
    options: {
      maxWidth: 800,
      maxHeight: 600,
      quality: 75,
      effort: 6
    }
  },
  // Owner image - displayed at 160-192px, optimize for 2x
  {
    pattern: 'owner.jpg',
    options: {
      maxWidth: 400,
      maxHeight: 400,
      quality: 80
    }
  },
  {
    pattern: 'owner.webp',
    options: {
      maxWidth: 400,
      maxHeight: 400,
      quality: 80,
      effort: 6
    }
  },
  // Gallery images - optimize for web display
  {
    pattern: 'gallery/*.webp',
    options: {
      maxWidth: 800,
      maxHeight: 600,
      quality: 75,
      effort: 6
    }
  },
  // Article images
  {
    pattern: 'articles/*.jpg',
    options: {
      maxWidth: 800,
      maxHeight: 600,
      quality: 75
    }
  }
];

async function optimizeImage(filePath, options) {
  const { maxWidth, maxHeight, quality, effort = 4 } = options;
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    // Create optimized version
    const optimized = image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    
    if (metadata.format === 'webp') {
      optimized.webp({ quality, effort });
    } else if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      optimized.jpeg({ quality, mozjpeg: true });
    } else if (metadata.format === 'png') {
      optimized.png({ quality, compressionLevel: 9 });
    }
    
    const buffer = await optimized.toBuffer();
    
    // Get original size
    const originalStats = await fs.stat(filePath);
    const originalSize = originalStats.size;
    const newSize = buffer.length;
    
    // Only write if significantly smaller
    if (newSize < originalSize * 0.95) {
      await fs.writeFile(filePath, buffer);
      const savings = originalSize - newSize;
      const percentage = ((savings / originalSize) * 100).toFixed(1);
      console.log(`✓ ${basename(filePath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${percentage}% saved)`);
      return { originalSize, newSize, savings };
    } else {
      console.log(`- ${basename(filePath)}: Already optimized (${(originalSize / 1024).toFixed(1)}KB)`);
      return { originalSize, newSize: originalSize, savings: 0 };
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${basename(filePath)}:`, error.message);
    return { originalSize: 0, newSize: 0, savings: 0 };
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  
  let totalOriginal = 0;
  let totalNew = 0;
  let totalSavings = 0;
  let processedCount = 0;
  
  for (const { pattern, options } of optimizations) {
    const files = await glob(pattern, { cwd: publicDir });
    
    for (const file of files) {
      const filePath = join(publicDir, file);
      const result = await optimizeImage(filePath, options);
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      totalSavings += result.savings;
      processedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Images processed: ${processedCount}`);
  console.log(`   Total original: ${(totalOriginal / 1024).toFixed(1)}KB`);
  console.log(`   Total optimized: ${(totalNew / 1024).toFixed(1)}KB`);
  console.log(`   Total saved: ${(totalSavings / 1024).toFixed(1)}KB (${((totalSavings / totalOriginal) * 100).toFixed(1)}%)`);
}

main().catch(console.error);
