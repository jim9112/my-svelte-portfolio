import { writable } from 'svelte/store';
import client from '../utils/client';
import projectData from '../data/projects.json';

export const projects = writable([]);
const setProjects = async () => {
	const data = await client.getAllByType('project');
	projects.set(data);
};

setProjects();
