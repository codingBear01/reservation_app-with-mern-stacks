import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

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
app.use(cookieParser());
app.use(cors());
app.use(express.json());

/* routes */
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

// to handle any error occurs in any routes or api req
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || 'Something went wrong';

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log('connected to backend');
});
