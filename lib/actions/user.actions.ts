"use server";

import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signInFormSchema } from "../validators";

// signIn user with credentials
export async function signInWithCredentials(
	prevState: unknown,
	formData: FormData
) {
	try {
		// validate form data
		const user = signInFormSchema.parse({
			email: formData.get("email"),
			password: formData.get("password"),
		});
		console.log("user = ", user);
		// signIn with credentials
		await signIn("credentials", user);
		return { success: true, message: "サインインに成功しました" };
	} catch (error) {
		// handle error
		console.error("Error signing in:", error);
		if (isRedirectError(error)) {
			throw error;
		}
		return {
			success: false,
			message: "メールアドレスかパスワードのどちらかが不正です",
		};
	}
}

// signOut user
export async function signOutUser() {
	await signOut();
}
