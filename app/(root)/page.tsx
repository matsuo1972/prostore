import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
	const latestProducts = await getLatestProducts();
	

	return (
		<>
			<ProductList data={latestProducts} title="最新の商品" limit={4} />
		</>
	);
};

export default Homepage;
