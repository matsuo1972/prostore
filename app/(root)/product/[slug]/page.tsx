import ProductImages from "@/components/shared/products/product-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailPage = async (props: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await props.params;
	console.log("slug = ", slug);
	const product = await getProductBySlug(slug);
	if (!product) {
		notFound();
	}
	return (
		<>
			<section>
				<div className="grid grid-cols-1 md:grid-cols-5">
					{/* イメージエリア　カラム */}
					<div className="col-span-2">
						{/* Images Component */}
						<ProductImages images={product.images} />
					</div>
					{/* 詳細エリア　カラム */}
					<div className="col-span-2 p-5">
						{/* 詳細エリア */}
						<div className="flex flex-col gap-6">
							<p>
								{product.brand} {product.category}
							</p>
							<h1 className="h3-bold">{product.name}</h1>
							<p>
								{product.rating.toString()} of{" "}
								{product.numReviews} Reviews
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
								{/** 欧米向け価格表示 <ProductPrice
									value={Number(product.price)}
									className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
								/> */}
								<p className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2">
									{product.price.toString()}円
								</p>
							</div>
						</div>
						<div className="mt-10">
							<p className="font-semibold">説明</p>
							<p>{product.description}</p>
						</div>
					</div>
					{/* Action Culumn */}
					<div>
						<Card>
							<CardContent className="p-4">
								<div className="mb-2 flex justify-between">
									<div>価格</div>
									<div>
										<p className="font-bold">
											{product.price.toString()}円
										</p>
									</div>
								</div>
								<div className="mb-2 flex justify-between">
									<div>ステータス</div>
									{product.stock > 0 ? (
										<Badge variant="outline">
											In Stock
										</Badge>
									) : (
										<Badge variant="destructive">
											在庫切れ
										</Badge>
									)}
								</div>
								{product.stock > 0 && (
									<div className="flex-center">
										<Button className="w-full">
											Add To Cart
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetailPage;
