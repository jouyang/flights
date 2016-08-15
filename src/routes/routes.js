import config from '../config';
import {APP_ROOT} from '../general';

const appRouter = (app) => {
  // load home page
  app.get('/', (req, res) => {
    res.sendFile('index.html', {root: APP_ROOT + '/public'});
  });
  // serve static content for home page
  app.get('/*', (req, res) => {
    res.sendFile(req.url, {root: APP_ROOT + '/public'});
  });

  // error handling
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }

    res.status(500).send(err.message);
  });
};

module.exports = appRouter;
