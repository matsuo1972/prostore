import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Convert prisma object into a regular js object
export function convertToPlainObject<T>(value: T): T {
	return JSON.parse(JSON.stringify(value));
  }

// Format numer with decimal places
export function formatNumberWithDecimal(num: number): string {
	const [int, decimal] = num.toString().split(".");
	return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// export function formatCurrency(amout: number | string | null) {
// 	if (typeof amout === "number") {
// 		return CURRENCY_FORMATTER.format(amout);
// 	} else if (typeof amout === "string") {
// 		return CURRENCY_FORMATTER.format(Number(amout));
// 	} else {
// 		return "NaN";
// 	}
// }

// UUIDを6桁に短くする
export function formatId(id: string) {
	return `..${id.substring(id.length - 6)}`;
}

// 日付と時間をフォーマット
export const formatDateTime = (dateString: Date) => {
	const dateTimeOptions: Intl.DateTimeFormatOptions = {
		month: "short",
		year: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	const dateOptions: Intl.DateTimeFormatOptions = {
		weekday: "short",
		month: "short",
		year: "numeric",
		day: "numeric",
	};
	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	const formattedDateTime: string = new Date(dateString).toLocaleString(
		"ja-JP",
		dateTimeOptions
	);
	const formattedDate: string = new Date(dateString).toLocaleString(
		"ja-JP",
		dateOptions
	);
	const formattedTime: string = new Date(dateString).toLocaleString(
		"ja-JP",
		timeOptions
	);
	return {
		dateTime: formattedDateTime,
		dateOnly: formattedDate,
		timeOnly: formattedTime,
	};
};

const testDate = new Date("2023-10-25T08:30:00Z");

const formatted = formatDateTime(testDate);

console.log("Full DateTime: ", formatted.dateTime);
console.log("Date Only: ", formatted.dateOnly);
console.log("Time Only: ", formatted.timeOnly);
