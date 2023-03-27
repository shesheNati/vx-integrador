const app = require("./src/app");

//Iniciamos servidor
app.listen(app.get("PORT"), () => {
  console.log(`aplicacion iniciada en el PUERTO ---> ${app.get("PORT")}`);
});


