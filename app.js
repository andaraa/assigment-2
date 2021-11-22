const express = require('express');
const connectDB = require('./configs/db');
const router = require('./routers/route');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// app.get('/', (req, res) => {

//   res.send('Hello World!');
// });

// app.use('/api', main);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
