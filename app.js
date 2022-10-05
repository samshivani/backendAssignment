const path = require("path");
const dbPath = path.join(__dirname, "amazonaws.db");

const express = require("express");
const app = express();
app.use(express.json());

const { open } = require("sqlite");

const sqlite3 = require("sqlite3");

let dataBase = null;

const initializeDbAndServer = async () => {
  try {
    dataBase = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/users/", async (request, response) => {
  const { page = 1, name = "", limit = 10, sort = DESC } = request.query;

  const orderBY = sort.includes("-") ? `${sort.replace("-", "")} DESC` : sort;
  const query = `
  SELECT 
  * 
  FROM 
    user_table
  WHERE 
    (UPPER(first_name) LIKE UPPER("${name}")) or (UPPER(last_name) LIKE UPPER("${name}"))
  ORDER BY ${orderBY}
  LIMIT ${limit}
  OFFSET ${page};`;
  try {
    const result = await dataBase.all(query);
    response.send(result);
  } catch (e) {
    console.log(e);
  }
});

app.post("/users/", async (request, response) => {
  const {
    id,
    first_name,
    last_name,
    company_name,
    city,
    state,
    zip,
    email,
    web,
    age,
  } = request.body;
  const createQuery = `
    INSERT INTO 
        user_table (id,first_name,last_name, company_name, city, state, zip, email, web, age)
    VALUES 
        ("${id},${first_name}",${last_name},${company_name},${city},${state},${zip} , ${email}, ${web}, ${age});`;
  try {
    const result = await dataBase.run(createQuery);
    response.send("{}");
  } catch (e) {
    console.log(e);
  }
});

app.get("/users/:userId/", async (request, response) => {
  const { userId } = request.params;
  const getUserDetails = `
    SELECT
        first_name,
        last_name,
        age
    FROM
        user_table
    WHERE 
        id = ${userId};`;
  const getUserResponse = await dataBase.get(getUserDetails);
  response.send({
    getUserResponse,
  });
});

app.delete("/users/:userId", async (request, response) => {
  const { userId } = request.params;
  const deleteUserQuery = `
    DELETE 
    FROM 
        user_table
    WHERE
        id = ${userId};`;
  const deleteResponse = await dataBase.run(deleteUserQuery);
  response.send("{}");
});

module.exports = app;
