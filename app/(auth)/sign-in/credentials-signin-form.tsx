"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

const CredentialsSignInForm = () => {
	const [data, action, isPending] = useActionState(signInWithCredentials, {
		success: false,
		message: "",
	});

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/";

	return (
		<form action={action}>
			<input type="hidden" name="callbackUrl" value={callbackUrl} />
			<div className="space-y-6">
				<div>
					<Label htmlFor="email">メールアドレス</Label>
					<Input
						className="mt-2"
						type="email"
						name="email"
						id="email"
						required
						autoComplete="email"
						defaultValue={signInDefaultValues.email}
					/>
				</div>
				<div>
					<Label htmlFor="password">パスワード</Label>
					<Input
						className="mt-2"
						type="password"
						name="password"
						id="password"
						required
						autoComplete="password"
						defaultValue={signInDefaultValues.password}
					/>
				</div>
				<div>
					<Button disabled={isPending} className="w-full">
						{isPending ? "サインインしています..." : "サインイン"}
					</Button>
				</div>
				{data && !data.success && (
					<div className="text-sm text-red-500 text-center">
						{data.message}
					</div>
				)}
				<div className="text-sm text-center text-muted-foreground">
					<p>アカウントをお持ちでない場合</p>
					<Link
						href="/sign-up"
						className="text-blue-500 hover:text-blue-700"
					>
						サインアップ
					</Link>
				</div>
			</div>
		</form>
	);
};

export default CredentialsSignInForm;
