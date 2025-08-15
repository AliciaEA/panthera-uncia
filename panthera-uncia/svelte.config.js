import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		adapter: adapter({

			pages: 'build',      // directory where pages will be outputted
			assets: 'build',     // directory where assets will be outputted
			fallback: undefined, // for single-page applications, specifies a fallback page
			precompress: false,  // whether to compress files
			strict: true         // whether to fail if the build is not strict
		}),
		paths: {

			base: process.env.NODE_ENV === 'production' ? '/panthera-uncia' : '',
		}
	}
};

export default config;
