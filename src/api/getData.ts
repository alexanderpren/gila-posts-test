import { IPost } from '../interface/IPost';

export const getPosts = async (): Promise<IPost[]> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!response.ok) {
		throw new Error('Error fetching data');
	}
	return await response.json();
};
