import { keepPreviousData, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
			placeholderData: keepPreviousData,
		},
		mutations: {
			retry: 0,
		},
	},
});

export default queryClient;
