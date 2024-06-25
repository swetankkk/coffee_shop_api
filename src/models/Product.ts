import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
	coffeeShop: mongoose.Schema.Types.ObjectId;
	name: string;
	price: number;
	description: string;
}

const productSchema = new mongoose.Schema({
	coffeeShop: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'CoffeeShop',
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	/*image: {
		type: String,
		required: true,
	},*/
});

const Product = mongoose.model('Product', productSchema);

export default Product;
