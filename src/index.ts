import express from "express";
import sequelizeConnection from "./config/dbConnect";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute";
import * as portfinder from 'portfinder';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 1999; // Default to 3025 if not specified

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your React app's URL
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/auth', authRouter);

app.use(morgan('tiny'));

sequelizeConnection.sync()
  .then(() => {
    console.log('Database synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`${process.env.APP_NAME || 'App'} running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error('Unable to synchronize the database:', err);
  });

export default app;