const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        // target: 'https://douban.uieee.com',
        target: 'https://dnkj.caidj.cn/mobileOrder',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}