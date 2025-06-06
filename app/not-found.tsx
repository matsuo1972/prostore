"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Image
				src="/images/logo.svg"
				width={48}
				height={48}
				alt={`${APP_NAME}`}
				priority={true}
			/>
			<div className="p-6 rounded-lg shadow-md text-center">
				<h1 className="text-3xl font-bold mb-5">Not Found</h1>
				<p className="text-destructive">
					ページが見つかりませんでした。
				</p>
				<Button
					variant="outline"
					className="mt-4 ml-2"
					onClick={() => (window.location.href = "/")}
				>
					ホーム画面に戻る
				</Button>
			</div>
		</div>
	);
}
