const app = require("./src/app.js");
const dotenv = require("dotenv");
const connectDb = require("./src/db/db.js");



connectDb()



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
