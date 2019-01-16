export default {
  text: `CREATE TABLE IF NOT EXISTS Downvote (
      id SERIAL PRIMARY KEY,
      "user" INTEGER NOT  NULL REFERENCES "User" ON DELETE CASCADE,
      question INTEGER NOT NULL REFERENCES Question ON DELETE CASCADE
  )`
};
