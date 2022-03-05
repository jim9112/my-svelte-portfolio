import * as prismic from '@prismicio/client';

const endpoint = `https://jimmy-portfolio.prismic.io/api/v2`;
// const accessToken = ``;

const client = prismic.createClient(endpoint);
export default client;
