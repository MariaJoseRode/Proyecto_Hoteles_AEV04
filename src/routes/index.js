const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien accedió al servidor");
  res.send("Bienvenido al servidor");
});

router.get("/rutaGet", (req, res) => {
  console.log("Alguien hizo un get");
  res.send("Hola desde la ruta get!");
});

router.get("/reservas", (req, res) => {
  console.log("Alguien hizo a la pagina de reservas");
  res.send("Hola desde tu pagina de  reservas");
});

module.exports = router;
