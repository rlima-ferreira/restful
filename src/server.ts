import * as express from 'express';
import * as cors from 'cors';
import * as env from 'dotenv';
import routers from './routers';

env.config();
const app = express();

// Configuração
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Rotas
app.use('/api/pessoa', routers.person);
app.use('/api/estado', routers.state);
app.use('/api/cidade', routers.city);
app.use('/api/pais', routers.country);
app.use('/api/endereco', routers.address);

// Iniciando
app.listen(3000);

// BaseURL: http://localhost:3000/api/{path}
