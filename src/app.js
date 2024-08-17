import express from 'express';
import { routerDrinks } from './routes/drinks.routes.js';

const app = express();
//settings
app.set("port", 3000 || process.env.PORT);
//Middlewares
app.use(express.json());
app.use("/api/drinks", routerDrinks)
export default app;
