import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		adapter: adapter({
			pages: 'output',      // directory where pages will be outputted
			assets: 'output',     // directory where assets will be outputted
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			
			

			base: process.env.NODE_ENV === 'production' ? '/panthera-uncia' : '',
		}
	}
};

export default config;
