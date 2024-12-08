export const getSearchParams = (params: object) => {
	const searchParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		searchParams.append(key, value.toString());
	});
	return searchParams;
};
