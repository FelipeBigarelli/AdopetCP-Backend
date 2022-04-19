import { hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuid();
  const password = await hash('123456', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, avatar, is_admin, created_at)
      values('${id}', 'FelipeBiga', 'felipebiga@adopetcp.com', '${password}', '', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log('User admin created'));
