export default function handler(req, res) {
  const healthInfo = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env?.NODE_ENV || 'development',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env?.npm_package_version || '1.0.0',
    nodejs: process.version,
  };

  res.status(200).json(healthInfo);
} 