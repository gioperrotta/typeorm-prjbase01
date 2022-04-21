import dotenv from "dotenv";
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🏃 Running Server on Port :>> ${PORT}`);
});
