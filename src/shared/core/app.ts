import Server from './server';
import dotenv from 'dotenv';

const app = new Server().app;
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.clear();
  console.log(`⚡ Server listening on port ${port}!`);
});
