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

router.get("/gps", (req, res) => {
  console.log("Alguien hizo a la pagina de gps");
  res.send("Hola desde tu pagina del gps");
});

router.get("/favoritos", (req, res) => {
  console.log("Alguien hizo a la pagina de favoritos");
  res.send("Hola desde tus favoritos");
});

router.get("/ajustes", (req, res) => {
  console.log("Alguien hizo a la pagina de ajustes");
  res.send("Hola desde la pagina de ajustes");
});

router.get("/ajustes", (req, res) => {
  console.log("Alguien hizo a la pagina de datos de usuario");
  res.send("Hola desde la pagina de datos de usuario");
});

module.exports = router;
