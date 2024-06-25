import express from 'express';
import {
	getAllCoffeeShops,
	getCoffeeShop,
	createCoffeeShop,
	updateCoffeeShop,
	deleteCoffeeShop,
} from '../controllers/coffeeShopController';
const router = express.Router();

router.get('/', getAllCoffeeShops);
router.get('/:id', getCoffeeShop);
router.post('/', createCoffeeShop);
router.put('/:id', updateCoffeeShop);
router.delete('/:id', deleteCoffeeShop);

export default router;
