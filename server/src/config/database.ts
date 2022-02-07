import mongoose from 'mongoose';
require('dotenv/config');

const databaseConnect = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_DB_URI || "mongodb+srv://cpm",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      (err) => {
        if (!err) {
          console.log('Conexão estabelecida com sucesso com o MongoDB');
        } else {
          console.log(
            `Falhou a estabelecer a conexão com o MongoDB, falhou com erro: ${err}`
          );
        }
      }
    );
  } catch (error) {
    console.log('Não foi possível inicicializar corretamente a base de dados!');
    console.log(error);
  }
};

export default databaseConnect;
