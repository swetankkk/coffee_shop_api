import { Request, Response } from 'express';
import CoffeeShop from '../models/CoffeeShop';
import Product from '../models/Product';
import httpStatus from 'http-status';

export const getAllCoffeeShops = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const coffeeShops = await CoffeeShop.find();
		res.status(httpStatus.OK).send({
			success: true,
			data: coffeeShops,
			message: 'Coffee shops retrieved successfully',
		});
	} catch (err: any) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send({ success: false, message: err.message });
	}
};

export const getCoffeeShop = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const coffeeShop = await CoffeeShop.findById(req.params.id);
		if (!coffeeShop) {
			res
				.status(httpStatus.NOT_FOUND)
				.send({ success: false, message: 'Coffee shop not found' });
		}

		res.status(httpStatus.OK).send({
			success: true,
			data: coffeeShop,
			message: 'Coffee shop retrieved successfully',
		});
	} catch (err: any) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send({ success: false, message: err.message });
	}
};

export const createCoffeeShop = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { name, location, rating, imageurl, reviews, distance } = req.body;
	const coffeeShop = new CoffeeShop({
		name,
		location,
		rating,
		imageurl,
		reviews,
		distance,
	});

	try {
		const newCoffeeShop = await coffeeShop.save();
		if (!newCoffeeShop) {
			res
				.status(httpStatus.BAD_REQUEST)
				.send({ success: false, message: 'Bad Request' });
		}
		res.status(httpStatus.CREATED).send({
			success: true,
			data: newCoffeeShop,
			message: 'Coffee shop created successfully',
		});
	} catch (err: any) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send({ success: false, message: err.message });
	}
};

export const updateCoffeeShop = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const coffeeShop = await CoffeeShop.findById(req.params.id);
		if (!coffeeShop) {
			res
				.status(httpStatus.NOT_FOUND)
				.send({ success: false, message: 'Coffee shop not found' });
		} else {
			Object.assign(coffeeShop, req.body);

			const updatedCoffeeShop = await coffeeShop.save();
			res.status(httpStatus.OK).send({
				success: true,
				data: updatedCoffeeShop,
				message: 'Coffee shop updated successfully',
			});
		}
	} catch (err: any) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send({ success: false, message: err.message });
	}
};

export const deleteCoffeeShop = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const coffeeShop = await CoffeeShop.findById(req.params.id);
		if (!coffeeShop) {
			res
				.status(httpStatus.NOT_FOUND)
				.send({ success: false, message: 'Coffee shop not found' });
		} else {
			await coffeeShop.deleteOne();

			res.status(httpStatus.GONE).send({
				success: true,

				message: 'Coffee shop deleted successfully',
			});
		}
	} catch (err: any) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send({ success: false, message: err.message });
	}
};
