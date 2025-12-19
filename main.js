const express = require("express");
const setupSwagger = require("./src/config/swagger.config");
require("dotenv").config();

async function main() {
  const app = express();
  const PORT = process.env.PORT;

  require("./src/config/mongoose.config");
  setupSwagger(app);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();
