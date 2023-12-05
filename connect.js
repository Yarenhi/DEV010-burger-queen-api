const config = require('./config');
// // eslint-disable-next-line no-unused-vars
// const { dbUrl } = config;
// async function connect() {
//   // TODO: Conexión a la Base de Datos
const { MongoClient } = require('mongodb');
// URL de conexión a la base de datos MongoDB
const uri = 'mongodb://localhost:27017/burguer_queen_api';
// Configuración de conexión
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function connect() {
  try {
    // Conectar a la base de datos
    await client.connect();
    console.log('Conexión a la base de datos exitosa');
    // Ahora puedes acceder a la base de datos y realizar operaciones
    // Ejemplo: acceder a una colección y realizar una consulta
    const database = client.db(); // Obtener la base de datos
    const collection = database.collection('burguer_queen_api'); // Obtener una colección
    // Realizar operaciones como encontrar documentos
    const documentos = await collection.find({}).toArray();
    console.log(documentos);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  } finally {
    // Cerrar la conexión al finalizar las operaciones
    await client.close();
  }
}
// Llamar a la función para conectar
module.exports = {connect};