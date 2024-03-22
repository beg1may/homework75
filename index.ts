import express from 'express';
import messageRouter from './message';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api', messageRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});