# Express TypeScript Template

A modern, production-ready Express.js template built with TypeScript, ESM modules, and best practices for 2025.

## ✨ Features

- 🚀 **Express 5.x** - Latest Express framework
- 📘 **TypeScript** - Full type safety with strict configuration
- 🎯 **ESM Modules** - Modern ES2022 module system
- ⚡ **Fast Build** - tsup for lightning-fast compilation
- 🔥 **Hot Reload** - tsx for instant development feedback
- �️ **Biome** - Ultra-fast linting and formatting
- 🧪 **Unit Testing** - Vitest with TypeScript support and Supertest for API testing
- 📊 **Test Coverage** - Built-in coverage reporting
- 📁 **Path Mapping** - Clean imports with `@/` aliases
- 🔒 **Type Safety** - Strict TypeScript configuration
- 🌍 **Cross-Platform** - Works on Windows, macOS, and Linux

## 🚀 Quick Start

### Prerequisites

- Node.js 22+
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the template
git clone <your-repo-url>
cd express-template

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The server will start on `http://localhost:3000`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm run dev` | Start development server with hot reload |
| `pnpm run build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm run test` | Run unit tests |
| `pnpm run test:watch` | Run tests in watch mode for development |
| `pnpm run test:coverage` | Run tests with coverage report |
| `pnpm run type-check` | Run TypeScript type checking |
| `pnpm run lint` | Check code for linting issues |
| `pnpm run lint:fix` | Fix automatically fixable linting issues |
| `pnpm run format` | Format code with Biome |
| `pnpm run format:check` | Check if code is properly formatted |
| `pnpm run check` | Run all checks (lint + format) |
| `pnpm run check:fix` | Fix all issues automatically |
| `pnpm run ci` | Run checks and tests for continuous integration |

## 📁 Project Structure

```plaintext
├── src/
│   ├── index.ts          # Main application entry
│   ├── index.test.ts     # Application integration tests
│   └── utils/
│       ├── index.ts      # Utility functions index
│       ├── math.ts       # Math utility functions
│       ├── math.test.ts  # Math utilities tests
│       ├── string.ts     # String utility functions
│       └── string.test.ts # String utilities tests
├── dist/                 # Built files (auto-generated)
├── coverage/             # Test coverage reports (auto-generated)
├── .env.example          # Environment variables template
├── biome.json            # Biome configuration
├── jest.config.js        # Jest testing configuration
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration
├── pnpm-lock.yaml        # Package manager lock file
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

## 🧪 Testing

This template includes comprehensive unit testing with **Vitest** and **Supertest**.

### Running Tests

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (automatically re-runs on file changes)
pnpm run test:watch

# Run tests with coverage report
pnpm run test:coverage
```

### Test Structure

Tests are co-located with their source files using the `.test.ts` suffix:

- `src/index.test.ts` - Integration tests for the Express app
- `src/utils/math.test.ts` - Unit tests for math utilities
- `src/utils/string.test.ts` - Unit tests for string utilities

### Writing Tests

#### API Testing with Supertest

```typescript
import request from 'supertest';
import app from './index';

describe('GET /api/endpoint', () => {
    it('should return expected response', async () => {
        const response = await request(app)
            .get('/api/endpoint')
            .expect(200)
            .expect('Content-Type', /json/);
        expect(response.body).toEqual({
            message: 'Expected message'
        });
    });
});
```

#### Unit Testing Utilities

```typescript
import { myFunction } from './myFunction';

describe('myFunction', () => {
    it('should handle normal input correctly', () => {
        expect(myFunction('input')).toBe('expected output');
    });

    it('should handle edge cases', () => {
        expect(myFunction('')).toBe('');
        expect(myFunction(null)).toBeNull();
    });
});
```

### Test Coverage

Coverage reports are generated in the `coverage/` directory and include:

- **HTML Report**: Open `coverage/index.html` in your browser
- **Terminal Summary**: Displayed after running tests with coverage
- **Coverage Files**: `coverage/coverage-final.json` for CI integration

## 🏗️ Production Build

```bash
# Build the application
pnpm run build

# Start production server
pnpm start
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
- **Testing**: Vitest 3.x
- **API Testing**: Supertest 7.x
- **Code Quality**: Biome 2.x
- **Module System**: ESM (ES2022)
- **Package Manager**: pnpm (recommended)

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
