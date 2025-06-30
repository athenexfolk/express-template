import request from 'supertest';
import app from './index';

describe('Express App', () => {
	describe('GET /', () => {
		it('should return hello message', async () => {
			const response = await request(app).get('/').expect(200).expect('Content-Type', /json/);

			expect(response.body).toEqual({
				message: 'Hello, World!',
			});
		});
	});

	describe('GET /health', () => {
		it('should return health status', async () => {
			const response = await request(app)
				.get('/health')
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toEqual(
				expect.objectContaining({
					status: 'ok',
					timestamp: expect.any(String),
				})
			);
		});
	});
});
