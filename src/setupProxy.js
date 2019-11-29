const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://47.98.213.151:8081/login',
        changeOrigin:true,
        pathRewrite: {
                    "^/api": "/"
                }
         }))
  // app.use(proxy('/test', { target: 'http://localhost:3000' }));
  // 省略...
};