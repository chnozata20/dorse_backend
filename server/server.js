const express = require('express');
const driverRouter = require('./routes/driver');
const employerRouter = require('./routes/employer');
const cargoRouter = require('./routes/cargo');
const pointRouter = require('./routes/point');
const trailerRouter = require('./routes/trailer');
const vehicleRouter = require('./routes/vehicle');
const driverCommentRouter = require('./routes/driver_comment');
const emploerCommentRouter = require('./routes/employer_comment');
const cargoRequest = require('./routes/cargo_request');
const memberRequest = require('./routes/member_request');
const cors = require('cors');
const app = express();



app.use(cors({
    origin: 'http://localhost:3456'
}));

app.use(express.json());
app.use('/driver', driverRouter);
app.use('/employer', employerRouter);
app.use('/cargo', cargoRouter);
app.use('/point', pointRouter);
app.use('/trailer', trailerRouter);
app.use('/vehicle', vehicleRouter);
app.use('/drivercomment', driverCommentRouter);
app.use('/employercomment', emploerCommentRouter);
app.use('/cargorequest', cargoRequest);
app.use('/memberrequest', memberRequest);


app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);

});