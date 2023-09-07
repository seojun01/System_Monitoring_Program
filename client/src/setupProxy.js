const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/packetinfo',
        createProxyMiddleware({
            target: '118.44.23.195:3001',
            changeOrigin: true,
        })
    );
};
