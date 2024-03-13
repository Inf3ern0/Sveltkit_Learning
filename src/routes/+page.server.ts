import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { creator } from '$lib/helpers/creater';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
	
}
}
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const description = formData.get('description');

		if (!description) {
			return error(404, {
				message: 'Description NOT FOUND'
			});
			
		}
	
		await creator(description.toString())
	}

} satisfies Actions;
