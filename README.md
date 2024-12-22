# Web Project Starter Kit

A modern, pre-configured web project starter template built with Next.js. This starter kit provides essential setup and configurations to help you quickly bootstrap new web projects.

## Features

### Essential Setup
- ✓ Next.js
- ✓ Environment Configuration
- ✓ TailwindCSS Styling
- ✓ ESLint & Prettier

### Development Tools
- ✓ Git Configuration
- ✓ VS Code Settings
- ✓ Development Scripts
- ✓ Basic Component Structure

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/web-project-starter.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your app in action.

## API Routes

### Health Check
GET `/api/health`

Returns the current status and health information of the application.

Example response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "environment": "development",
  "uptime": 1234.56,
  "memory": {
    "heapTotal": 123456789,
    "heapUsed": 987654321,
    "rss": 234567890,
    "external": 12345678
  },
  "version": "1.0.0",
  "nodejs": "v18.x.x"
}
```

## Environment Variables

The following environment variables can be configured in your `.env` file:

```
PORT=3000
NODE_ENV=development
```

## Project Structure

```
├── src/
│   ├── pages/          # Next.js pages
│   │   ├── api/        # API routes
│   │   │   └── health.js  # Health check endpoint
│   │   └── index.js    # Homepage
│   ├── components/     # React components
│   └── styles/         # CSS and styling files
├── public/            # Static assets
├── .env.example       # Example environment variables
├── .gitignore        # Git ignore rules
└── tailwind.config.js # Tailwind CSS configuration
```

## Features

### Dark Mode Support
- Built-in dark mode toggle
- Persists user preference
- Respects system preferences
- Smooth mode transitions

### API Endpoints
- Health check endpoint
- Status monitoring
- Environment information

### Development Experience
- Hot reloading
- Code formatting
- Linting rules
- VS Code integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
