import {neon} from '@neondatabase/serverless'

const sql = neon(`${'postgresql://neondb_owner:npg_pl2iyWh7PYFw@ep-floral-frog-a4sfw110-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'}`);

export default sql; 