const PREFIX = "VITE_";

const getConfig = <T>(name: string) => {
	const configName = `${PREFIX}${name}`;
	if (configName in import.meta.env) {
		return import.meta.env[configName] as T;
	} else throw new Error(`Config ${configName} not found`);
};

export default {
	PORT: getConfig<number>("PORT"),
	API_URL: getConfig<string>("API_URL"),
};
