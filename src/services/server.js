const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 5000;

app.use('/api/proxy', (req, res, next) => {
    const { videoUrl } = req.query;
  
    if (videoUrl) {
      createProxyMiddleware({
        target: videoUrl,
        changeOrigin: true,
        onProxyRes: function (proxyRes, req, res) {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Methods', 'GET');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        }
      })(req, res, next);
    } else {
      res.status(400).json({ error: 'O parâmetro de vídeo é obrigatório.' });
    }
  });

app.listen(port, () => {
  console.log(`Servidor proxy reverso rodando em http://localhost:${port}`);
});