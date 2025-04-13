import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductProp = {
	product: Product;
};
const ProductCard = ({ product }: ProductProp) => {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="p-0 items-center">
				<Link href={`/product/${product.slug}`}>
					<Image
						src={product.images[0]}
						alt={product.name}
						height={300}
						width={300}
						priority={true}
					/>
				</Link>
			</CardHeader>
			<CardContent className="p-4 grid gap-4">
				<div className="text-xs">{product.brand}</div>
				<Link href={`/product/${product.slug}`}>
					<h2 className="text-sm font-medium">{product.name}</h2>
				</Link>
				<div className="flex-between gap-4">
					<p>{product.rating} Stars</p>
					{product.stock > 0 ? (
						/** 日本版表示用 <p className="font-bold">{product.price}円</p> */
						/** 欧米向け表示用　→ <ProductPrice value={Number(product.price)} className='text-red-500'/> */
						<p className="font-bold">{product.price}円</p>
					) : (
						<p className="text-destructive">在庫切れ</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
