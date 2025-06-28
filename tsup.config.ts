import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	format: ['esm'],
	target: 'es2022',
	sourcemap: false,
	clean: true,
	dts: false,
	splitting: false,
	skipNodeModulesBundle: true,
	minify: true,
});
