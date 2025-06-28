# Express TypeScript Template

A modern, production-ready Express.js template built with TypeScript, ESM modules, and best practices for 2025.

## ✨ Features

- 🚀 **Express 5.x** - Latest Express framework
- 📘 **TypeScript** - Full type safety with strict configuration
- 🎯 **ESM Modules** - Modern ES2022 module system
- ⚡ **Fast Build** - tsup for lightning-fast compilation
- 🔥 **Hot Reload** - tsx for instant development feedback
- �️ **Biome** - Ultra-fast linting and formatting
- 📁 **Path Mapping** - Clean imports with `@/` aliases
- 🔒 **Type Safety** - Strict TypeScript configuration
- 🌍 **Cross-Platform** - Works on Windows, macOS, and Linux

## 🚀 Quick Start

### Prerequisites

- Node.js 22+
- npm or yarn

### Installation

```bash
# Clone the template
git clone <your-repo-url>
cd express-template

# Install dependencies
npm install

# Start development server
npm run dev
```

The server will start on `http://localhost:3000`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Check code for linting issues |
| `npm run lint:fix` | Fix automatically fixable linting issues |
| `npm run format` | Format code with Biome |
| `npm run format:check` | Check if code is properly formatted |
| `npm run check` | Run all checks (lint + format) |
| `npm run check:fix` | Fix all issues automatically |
| `npm run ci` | Run checks for continuous integration |

## 📁 Project Structure

```
├── src/
│   └── index.ts          # Main application entry
├── dist/                 # Built files (auto-generated)
├── .env.example          # Environment variables template
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration
├── .prettierrc           # Code formatting rules
└── package.json          # Project dependencies
```

## 🛠️ Development

### Environment Variables

Copy `.env.example` to `.env` and configure your environment:

```bash
cp .env.example .env
```

### Path Aliases

Use clean imports with the configured path mapping:

```typescript
// Instead of relative imports
import { helper } from '../../../utils/helper';

// Use clean aliases
import { helper } from '@/utils/helper';
```

### Adding New Routes

```typescript
// src/routes/users.ts
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Users endpoint' });
});

export default router;
```

## 🏗️ Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration with:
- ES2022 target and modules
- Path mapping for clean imports
- Strict type checking enabled
- Source maps for debugging

### Build System

Built with tsup for optimal performance:
- ESM output format
- ES2022 target
- Minification enabled
- Tree shaking support

### Code Quality

Biome provides:
- Ultra-fast linting (10-100x faster than ESLint)
- Consistent code formatting
- Import organization
- TypeScript-aware rules

## 📦 Tech Stack

- **Runtime**: Node.js 22+
- **Framework**: Express.js 5.x
- **Language**: TypeScript 5.x
- **Build Tool**: tsup
- **Dev Server**: tsx
- **Code Quality**: Biome
- **Module System**: ESM (ES2022)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

If you have any questions or need help, please open an issue in the repository.
