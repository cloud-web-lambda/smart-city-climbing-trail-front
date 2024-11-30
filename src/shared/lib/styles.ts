export const convertDvhToPx = (dvh: string, rootHeight: number) => {
	console.assert(dvh.endsWith("dvh"), "Value must end with 'dvh'");
	const dvhValue = parseFloat(dvh.replace("dvh", ""));
	return `${(dvhValue / 100) * rootHeight}px`;
};
