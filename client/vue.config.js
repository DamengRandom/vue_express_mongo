const path = require('path');

// proxy from localhost:8080 -> localhost:4932
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: { 
      '/api': {
        // target: 'http://localhost:4940' // docker way port is 4940
        target: 'http://localhost:4932' // heroku is reading port as 4932 && docker-compose way of using 4932
      }
    }
  }
};
