const {
    soap
} = require('strong-soap');
const {
    readFileSync
} = require('fs');
const querystring = require('querystring');
const soapServices = require('./soap-services');
const config = require('../config');
const logger = require('./logger');
const sendServiceFile = readFileSync('send-service.wsdl', 'utf8');
const XMLHandler = soap.XMLHandler;
const _xmlHandler = new XMLHandler();

const initialSoap = server => {
    const port = server.address().port;

    const soapServer = soap.listen(server, config.path, soapServices, sendServiceFile);

    soapServer.log = (type, data) => {
        let dataObj;
        let xmlObj;

        if (type === 'info') {
            const query = data.split('?')[1];
            if (query) {
                dataObj = querystring.parse(query, null, null);

                // TODO - GET Request Handling
                // const dataCoding = parseFloat(query.dataCoding.split('/')[1]);
                // console.log(serviceCoding[dataCoding]);
            }
        } else {
            xmlObj = _xmlHandler.xmlToJson(null, data, null);
            if (xmlObj) dataObj = xmlObj.Body.SendMessage;
        }

        const dataStr = dataObj ? JSON.stringify(dataObj) : data;

        logger.info(`[${type}] - ${dataStr || data}`);
        if (xmlObj) logger.debug(`[${type}] - ${JSON.stringify(xmlObj)}`);
        if (dataStr !== data) logger.trace(`[${type}] - ${data}`);
    };

    logger.info(`Soap server listening on http://localhost:${port}${config.path}`);
};

module.exports = {
    initialSoap,
    soapServices,
    sendServiceFile
};
