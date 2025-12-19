const express = require("express");
const setupSwagger = require("./src/config/swagger.config");
const morgan = require("morgan");
require("dotenv").config();

async function main() {
  const app = express();
  const PORT = process.env.PORT;

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require("./src/config/mongoose.config");
  setupSwagger(app);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();
