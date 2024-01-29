type Character = {
	id: number;
	name: string;
	image: string;
	occupation: string;
};

const API = 'https://svelte.fun/api/bobs-burgers';

export const load = async () => {
	const response = await fetch(`${API}/characters`);
	const characters: Character[] = await response.json();

	console.log(response.status);

	return {
		characters
	};
};
