import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
	.string()
	.refine(
		(value) =>
			/^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
		"Price must have exactly two decimal places"
	);

// Schema for inserting products
export const insertProductSchema = z.object({
	name: z.string().min(3, "名称は最低３文字である必要があります"),
	slug: z.string().min(3, "Slugは最低３文字である必要があります"),
	category: z.string().min(3, "カテゴリーは最低３文字である必要があります"),
	brand: z.string().min(3, "ブランドは最低３文字である必要があります"),
	description: z.string().min(3, "注釈は最低３文字である必要があります"),
	stock: z.coerce.number(),
	images: z
		.array(z.string())
		.min(1, "商品は最低一つのイメージ写真が必要です"),
	isFeatured: z.boolean(),
	banner: z.string().nullable(),
	price: z.string(),
});

export const signInFormSchema = z.object({
	email: z.string().email("メールアドレスが無効です"),
	password: z.string().min(6, "パスワードは最低６文字である必要があります"),
});
