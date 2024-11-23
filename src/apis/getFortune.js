import axios from 'axios';

export const getFortune = async (id) => {
	const response = await axios.get(`/`, {
		id,
	});

	return response;
};
