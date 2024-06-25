import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
	try {
		const mongoUri = process.env.MONGO_URI;
		if (!mongoUri) {
			console.log('MONGO_URI environment variable is not defined');
			return;
		}
		await mongoose.connect(mongoUri, {} as mongoose.ConnectOptions);
		console.log('Connected to MongoDB');
	} catch (err) {
		console.log('connection error:', err);
	}
};

export default connectDB;
