// server.js
const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuración de Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para analizar cuerpos de solicitud
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Uso de rutas
app.use('/', homeRoutes);
app.use('/', authRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
