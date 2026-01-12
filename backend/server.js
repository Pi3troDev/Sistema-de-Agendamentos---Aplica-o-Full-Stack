import express from 'express'
import apiRoutes from './Routes/apiRoutes'

const app = express();
app.use(express.json());

const APP_PORT = 3000;

app.use(apiRoutes)

app.listen(APP_PORT, () => {
    console.log(`Servidor rodando na porta ${APP_PORT}.`)
})