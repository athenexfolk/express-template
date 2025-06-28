import express from 'express';

const app = express();
const PORT = Number.parseInt(process.env.PORT ?? '3000', 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
	res.json({ message: 'Hello, World!' });
});

app.get('/health', (_req, res) => {
	res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('*', (_req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
	console.error('Error:', err);
	res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
	console.log(`🚀 Server is running on port ${PORT}`);
	console.log(`📡 Health check available at http://localhost:${PORT}/health`);
});
