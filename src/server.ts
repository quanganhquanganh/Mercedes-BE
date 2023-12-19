// import express from 'express';
// import path from 'path';
// import compression from 'compression';
// import cors from 'cors';
// import helmet from 'helmet';

// import camelCaseReq from './middlewares/camelCaseReq';
// import omitReq from './middlewares/omitReq';
// import snakeCaseRes from './middlewares/snakeCaseRes';
// import errorHandler from './middlewares/errorHandler';

// import { rootHandler } from './root';

// export const app: express.Application = express();

// require('dotenv').config();
// require('./models');

// // eslint-disable-next-line @typescript-eslint/no-var-requires

// if (process.env.CORS) {
//   const corsDomains = process.env.CORS.split(',');
//   console.info(`Starting server with CORS domain: ${corsDomains.join('; ')}`);
//   app.use(
//     cors({
//       origin: corsDomains,
//       allowedHeaders: ['Content-Type', 'Authorization'],
//     }),
//   );
// }
// app.use(helmet());
// app.use(compression());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(camelCaseReq);
// app.use(omitReq);
// app.use(snakeCaseRes());
// app.use(express.static(path.join(__dirname, '..', 'public')));

// require('./routes')(app);

// app.get('/', rootHandler);

import express from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import httpLogger from 'http-logger';

import camelCaseReq from './middlewares/camelCaseReq';
import omitReq from './middlewares/omitReq';
import snakeCaseRes from './middlewares/snakeCaseRes';
import errorHandler from './middlewares/errorHandler';

import { rootHandler } from './root';

export const app: express.Application = express();

require('dotenv').config();
require('./models');


if (process.env.CORS) {
  const corsDomains = process.env.CORS.split(',');
  console.info(`Starting server with CORS domain: ${corsDomains.join('; ')}`);
  app.use(
    cors({
      origin: corsDomains,
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  );
}
app.use(camelCaseReq);
app.use(omitReq);
app.use(snakeCaseRes());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./routes')(app);

app.use(helmet());
app.use(compression());
// app.use(httpLogger());
app.get('/', rootHandler);
