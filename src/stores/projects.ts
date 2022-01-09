import { writable } from 'svelte/store';
import projectData from '../data/projects.json';

export const projects = writable(projectData.projects);
