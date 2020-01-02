const app = require("./app");
const PORT = require("../config").PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
