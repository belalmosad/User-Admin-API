const express = require('express');
const { default: mongoose } = require('mongoose');
const userRouter = require('./Routes/userRoute');
const server = express();
const port = process.env.PORT || 8080;
require('dotenv').config();

server.listen(port, () => {
    console.log(`listening on port ${port}`)
});

// ------------------------------------------------ DB Connection --------------------------------
mongoose.connect(process.env.DB_URL)
    .then(() => { console.log('DB Connected') })
    .catch(() => { console.log('error in DB') });



// ------------------------------------------------ Routes / Middlewares  --------------------------------
server.use(express.json());
server.use(userRouter);



// 404 Not Found Middleware
server.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// Error handling Middleware
server.use((error, req, res, next) => {
    let statusCode = error.statusCode;
    res.status(statusCode).json({ message: error });
});