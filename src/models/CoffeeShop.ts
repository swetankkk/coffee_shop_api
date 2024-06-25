import mongoose, { Document, Schema } from 'mongoose';

interface ICoffeeShop extends Document {
	name: string;
	location: string;
	rating: number;
	imageurl: string;
	reviews: number;
	distance: number;
}

const CoffeeShopSchema = new mongoose.Schema({
	name: { type: String, required: true },
	location: { type: String, required: true },
	rating: { type: Number, default: 0 },
	imageurl: { type: String, required: true },
	reviews: { type: Number, default: 0 },
	distance: { type: Number, default: 0 },
});

export default mongoose.model<ICoffeeShop>('CoffeeShop', CoffeeShopSchema);
