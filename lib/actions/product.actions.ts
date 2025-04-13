"use server";

import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
	const data = await prisma.product.findMany({
		take: LATEST_PRODUCTS_LIMIT,
		orderBy: { createdAt: "desc" },
	});

	// return products.map((product) => ({
	// 	id: product.id,
	// 	name: product.name,
	// 	slug: product.slug,
	// 	category: product.category,
	// 	brand: product.brand,
	// 	description: product.description,
	// 	stock: product.stock,
	// 	images: product.images,
	// 	isFeatured: product.isFeatured,
	// 	banner: product.banner,
	// 	numReviews: product.numReviews,
	// 	createdAt: product.createdAt,
	// 	price: product.price.toString(),
	// 	rating: product.rating.toString(),
	// }));
	return convertToPlainObject(data);
}

//
export async function getProductBySlug(slug: string) {
	return await prisma.product.findFirst({
		where: {
			slug: slug,
		},
	});
}
