import express, { Request } from 'express';
import connectDB from './config/db';
import coffeeShopRoutes from './routes/coffeeShopRoutes';
import winston from 'winston';
import cors from 'cors';

connectDB();

const app = express();

app.use(
	cors({
		origin: '*', // Adjust this to specify allowed origins or use '*' for all origins
		methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
		allowedHeaders: ['Content-Type', 'Authorization'], // Adjust according to your needs
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [new winston.transports.Console()],
});

app.use((req: Request, res, next) => {
	logger.info(`${req.method} ${req.url}`);
	next();
});

app.use('/api/coffee-shops', coffeeShopRoutes);

export default app;
