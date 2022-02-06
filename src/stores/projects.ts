import { writable } from 'svelte/store';
import client from '../utils/client';

export const projects = writable([]);

const setProjects = async () => {
	const data = await client.getAllByType('project');
	projects.set(data);
};

setProjects();
