const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MarketHub API Documentation',
      version: '1.0.0',
      description: 'This is the API documentation for our application.',
        contact: {
        name: 'Amirhossein Olyanasab Narab',
        email: 'amirholyanasabnarab@gmail.com'
    },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [], 
};

const specs = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
};

module.exports = setupSwagger;