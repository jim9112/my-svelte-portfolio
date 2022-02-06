import * as prismic from '@prismicio/client';

const endpoint = `https://jimmy-portfolio.prismic.io/api/v2`; // Fill in your repository name
const accessToken = ``; // If your repo is private, add an access token

const client = prismic.createClient(endpoint);
export default client;
