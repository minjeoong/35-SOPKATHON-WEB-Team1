export const formatDate = (date) => {
	const [year, month, day] = date.split('.');

	return `${parseInt(month)}.${parseInt(day)}`;
};
