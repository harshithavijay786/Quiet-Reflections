const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS quiet_reflections.quiet_reflection (quiet_reflection_id INT NOT NULL AUTO_INCREMENT, notes TEXT NOT NULL , user_id INT NOT NULL , PRIMARY KEY (quiet_reflection_id) , FOREIGN KEY (user_id) REFERENCES user(user_id)) ENGINE = InnoDB;`

  await con.query(sql)
}

createTable()

// POST Example:
const post = {
  notes: "Hi, This is my first post",
  userId: 1
}

// READ
async function getPost(post) {
  let sql = `
    SELECT * FROM quiet_reflection WHERE quiet_reflection_id=${post.id};
  `;

  let postDetails = await con.query(sql)
  return postDetails[0];
}

// CREATE
async function createPost(post) {
  let sql = `
    INSERT INTO quiet_reflection (notes, user_id)
    VALUES("${user.notes}", "${user.userId}"");
  `;
  return post;
}

// UPDATE
async function updatePost(post) {
  let sql = `
    UPDATE User SET notes="${post.notes}"
    WHERE quiet_reflection_id="${post.id}";
  `
  await con.query(sql)
  let updatedPost = await getPost(post)
  return updatedPost;
}

// DELETE
async function deletePost(post) {
  let sql = `
    DELETE from quiet_reflection
    WHERE quiet_reflection_id="${post.id}";
  `
  await con.query(sql)
}

module.exports ={ getPost, createPost, updatePost, deletePost }

