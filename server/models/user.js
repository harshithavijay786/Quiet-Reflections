const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS quiet_reflections.user (user_id INT NOT NULL AUTO_INCREMENT , first_name VARCHAR(40) NOT NULL , last_name VARCHAR(40) NOT NULL , user_name VARCHAR(40) NOT NULL , email_id VARCHAR(40) NOT NULL , password VARCHAR(40) NOT NULL , PRIMARY KEY (user_id)) ENGINE = InnoDB;`

  await con.query(sql)
}

createTable()

// USER Example:
const user = {
    firstName:  "Harshitha",
    lastName: "Vijay Kumar",
    userName: "Harshitha786",
    emailId: "harshithavijaykumar786@gmail.com",
    password: "icecream"
}

//check to see if username is in use:
async function userExists(user) {
  let sql = `
    SELECT * FROM User
    WHERE user_name = "${user.userName}"
  `
  return await con.query(sql)
}

// READ in CRUD - Logging in a user
async function login(user) {
  let cUser = await userExists(user)
  if(!cUser[0]) throw Error("Username does not exist!")
  if(cUser[0].password != user.password) throw Error("Password incorrect!!")

  return cUser[0]
}

// CREATE for User - registering
async function register(user) {
  let cUser = await userExists(user)
  if(cUser.length > 0) throw Error("Username already in use.")
  
  let sql = `
    INSERT INTO User (first_name, last_name, user_name, email_id, password)
    VALUES("${user.firstName}", "${user.lastName}", "${user.userName}", "${user.emailId}", "${user.password}");
  `  
  await con.query(sql)
  let newUser = await login(user)
  return newUser //issue fixed from class: removed [0] since login function returns this already
}

//U for Update - Update email of user
async function updateEmail(user) {
  let cEmail = await getEmail(user)
  if(cEmail) throw Error("Email already in use!!")

  let sql = `
    UPDATE User SET email_id="${user.emailId}"
    WHERE user_name="${user.userName}";
  `
  await con.query(sql)
  let updatedUser = await userExists(user)
  return updatedUser[0]
}

async function getEmail(user) {
  let sql = `
    SELECT email_id FROM User
    WHERE email_id="${user.emailId}";
  `
  let email = await con.query(sql)
  return email[0]
}

//D for Delete - delete user account
async function deleteAccount(user) {
  let sql = `
    DELETE from User
    WHERE user_name="${user.userName}";
  `
  await con.query(sql)
}

// CRUD functions will go here 
//R for READ -- get all users
async function getAllUsers() {
  let sql = `SELECT * FROM User;`
  return await con.query(sql)
}

module.exports ={ getAllUsers, login, register, updateEmail, deleteAccount }