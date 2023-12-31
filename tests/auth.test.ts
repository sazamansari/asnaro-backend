// src/test/auth.test.ts
import request from 'supertest';
import app from '../src/index'; // Import your Express app

describe('POST /api/v1/auth/register', () => {
  it('should register a new user and return a token', async () => {
    const response = await request(app)
      .post('/api/v1/auth/register')
      .send({
        name01: 'John Doe',
        email: 'john@example.com',
        password: '123456',
        // Include other required fields from your registration endpoint
      })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('token');
    // Add more assertions as needed
  });

  // Additional test cases can be added here
});
