import { auth } from "@/auth";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import CredentialsSignInForm from "./credentials-signin-form";
export const metadata: Metadata = {
	title: "Sign In",
};
const SignInPage = async (props: {
	searchParams: Promise<{ callbackUrl: string }>;
}) => {
	const { callbackUrl } = await props.searchParams;
	const session = await auth();

	// if user is already signed in, redirect to home page
	if (session) {
		redirect(callbackUrl || "/");
	}
	// if user is not signed in, show sign in page
	// if (!session) {
	// 	redirect("/sign-in");
	// }

	return (
		<div className="w-full max-w-sm mx-auto p-4">
			<Card>
				<CardHeader className="space-y-4">
					<Link href="/" className="flex-center">
						<Image
							src="/images/logo.svg"
							width={100}
							height={100}
							alt={`${APP_NAME} Logo`}
							priority={true}
						/>
					</Link>
					<CardTitle className="text-center">サインイン</CardTitle>
					<CardDescription className="text-center">
						あなたのアカウントへサインインします
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<CredentialsSignInForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default SignInPage;
