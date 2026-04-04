module.exports = {
  apps: [
    {
      name: 'mbuzenk-zetro',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        HOSTNAME: '0.0.0.0',
        PORT: 3000
      }
    }
  ]
};
