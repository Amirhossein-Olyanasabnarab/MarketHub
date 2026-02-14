const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "MarketHub",
                description: "RESTful API documentation for MarketHub – an online marketplace platform with OTP-based authentication and user management.",
                version: "1.0.0",
                contact: {
                    name: "Amir Hossein Olyanasab",
                    email: "amirholya01@gmail.com"
                }
            },
        },
        apis: []
    });
    const swagger = swaggerUI.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUI.serve, swagger);
}

module.exports = swaggerConfig;