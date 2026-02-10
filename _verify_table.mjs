import pg from 'pg';
const { Client } = pg;

const client = new Client({
    connectionString: 'postgresql://postgres:m1NnRpoI2VqEGgUC@db.yezzoegjsdfrmtnmtvtp.supabase.co:5432/postgres',
    ssl: { rejectUnauthorized: false }
});

async function main() {
    await client.connect();

    // Check table exists
    const res = await client.query(`
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_name = 'contact_submissions'
    ORDER BY ordinal_position;
  `);
    console.log('Table columns:', JSON.stringify(res.rows, null, 2));

    // Check RLS
    const rls = await client.query(`
    SELECT relname, relrowsecurity
    FROM pg_class
    WHERE relname = 'contact_submissions';
  `);
    console.log('RLS enabled:', rls.rows[0]?.relrowsecurity);

    // Check policies
    const pol = await client.query(`
    SELECT policyname, cmd
    FROM pg_policies
    WHERE tablename = 'contact_submissions';
  `);
    console.log('Policies:', JSON.stringify(pol.rows, null, 2));

    await client.end();
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
