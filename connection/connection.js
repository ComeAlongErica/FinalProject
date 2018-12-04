// "use strict";
// const pg = require("pg");
// const pool = {
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 5432,
//     database: "taskDatabase",
//     ssl: false
// };

// module.exports  = new pg.Pool(pool);

"use strict";
const pg = require("pg");
const pool = {
    user: "postgres",
    password: "matt",
    host: "localhost",
    port: 5432,
    database: "taskDatabase",
    ssl: false
};

module.exports = new pg.Pool(pool);