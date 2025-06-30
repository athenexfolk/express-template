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

app.listen(PORT, () => {
	console.log(`🚀 Server is running on port ${PORT}`);
	console.log(`📡 Health check available at http://localhost:${PORT}/health`);
});

export default app;
