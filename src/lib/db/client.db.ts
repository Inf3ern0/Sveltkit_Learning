import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

import { PRIVATE_DB_TOKEN, PRIVATE_DB_URL } from '$env/static/private';

const client = createClient({ url: PRIVATE_DB_URL, authToken: PRIVATE_DB_TOKEN });

export const db = drizzle(client);

