const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
  { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
  { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
  { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
  { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
  { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

// Middleware para servir archivos estáticos desde la carpeta "img"
app.use(express.static('img'));

// READ
app.get('/', (req, res) => {
  res.send(`
  <h1>Lista de usuarios</h1>
  <ul>
  ${usuarios
    .map(
      (usuario) => `<li>ID: ${usuario.id} | Edad: ${usuario.edad} | Nombre: ${usuario.nombre} | Lugar de Procedencia: ${usuario.lugarProcedencia}</li>`
    )
    .join('')}
  </ul>  
  <form action="/usuarios" method="post">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" required>
  <button type="submit">Agregar usuario</button>
  </form>
  <a href="/usuarios">Conoce a nuestros luchadores</a>
  <br>
  <a href="/ryu">Página de Ryu</a>
  <br>
  <a href="/Chun-Li">Página de Chun-Li</a>
  <br>
  <a href="Guile">Página de Guile</a>
  <br>
  <a href="/dhalsim">Página de Dhalsim</a>
  <br>
  <a href="/Blanka">Página de Blanka</a>
  `);
});

// Ryu Page
app.get('/ryu', (req, res) => {
  res.send(`
  <h1>Ryu</h1>
  <img src="Ryu.jpg" alt="Ryu">
  `);
});

// Chun-Li Page
app.get('/Chun-Li', (req, res) => {
  res.send(`
  <h1>Chun-Li</h1>
  <img src="Chun-Li_SF6.WEBP" alt="Chun-Li">
  `);
});

// Guile Page
app.get('/Guile', (req, res) => {
    res.send(`
    <h1>Guile</h1>
    <img src="Guile_SF6.WEBP" alt="Guile">
    `);
  });

// Dhalsim Page
app.get('/Dhalsim', (req, res) => {
  res.send(`
  <h1>Dhalsim</h1>
  <img src="dhalsim.WEBP" alt=Dhalsim">
  `);
});

// Blanka Page
app.get('/Blanka', (req, res) => {
  res.send(`
  <h1>Blanka</h1>
  <img src="Super_Blanka.png" alt="Blanka">
  `);
});

// CREATE
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const newUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };
  usuarios.push(newUsuario);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Express está escuchando en el puerto 3000');
});
