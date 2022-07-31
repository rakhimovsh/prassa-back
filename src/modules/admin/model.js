import { fetch } from '../../lib/postgres.js';

const LOGINUSER = `select * from admins where username = $1 and password = $2`;

async function LoginUser({ username, password }) {
  try {
    return await fetch(LOGINUSER, username, password);
  } catch (e) {
    console.error(e);
  }
}

export { LoginUser };