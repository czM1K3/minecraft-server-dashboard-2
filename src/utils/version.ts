export const getVersion = (raw: string) => {
	const matched = raw.match(/\(MC:\ (.*)\)/);
	if (matched && matched.length >= 2)
		return matched[1];
	return raw;
};
