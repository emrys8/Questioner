export default {
  text: `CREATE TABLE IF NOT EXISTS Users (
      id SERIAL PRIMARY KEY,
      firstname text NOT NULL,
      lastname text NOT NULL,
      othername text,
      email text NOT NULL,
      password text NOT NULL,
      phoneNumber INTEGER NOT NULL,
      username text NOT NULL,
      registered DATE DEFAULT NOW(),
      isAdmin boolean DEFAULT FALSE
    )`
};