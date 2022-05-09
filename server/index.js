import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

/* mongoose */
// to handle initial connection errors
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongoDB');
  } catch (err) {
    throw err;
  }
};
// to handle errors after initaial connection was established. mongoose atempt to reconnect.
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

/* middlewares */
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.listen(8800, () => {
  connect();
  console.log('connected to backend');
});
