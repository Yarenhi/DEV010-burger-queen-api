const config = require('./config');
const mongoose = require('mongoose');

// URL de conexión a la base de datos MongoDB
const uri = 'mongodb://localhost:27017/burguer_queen_api';

// Configuración de conexión
async function connect() {
  try {
    // Conectar a la base de datos usando Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos exitosa');

    // Aquí puedes realizar operaciones con Mongoose

    // Ejemplo: acceder a un modelo y encontrar documentos
    const Model = mongoose.model('burguer_queen_api', new mongoose.Schema({
      // Define tu esquema aquí
    }));

    const documentos = await Model.find({});
    console.log(documentos);
  } catch (error) {
    console.error('Error al conectar a la base de datos con Mongoose:', error);
  }
}

module.exports = { connect };
