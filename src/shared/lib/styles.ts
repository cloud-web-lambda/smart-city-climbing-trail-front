export const convertDvhToPx = (dvh: string, rootHeight: number) => {
	console.assert(dvh.endsWith("dvh"), "Value must end with 'dvh'");
	const dvhValue = parseFloat(dvh.replace("dvh", ""));
	return `${(dvhValue / 100) * rootHeight}px`;
};

export const getRootStyles = () => {
	return window.getComputedStyle(document.body);
};

export const getSemanticColor = (color: string) => {
	console.assert(color.startsWith("--c-"), "Color must be a CSS variable");
	const rootStyles = getRootStyles();
	return rootStyles.getPropertyValue(color).trim();
};
