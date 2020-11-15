const path = require('path');

// proxy from localhost:8080 -> localhost:4932
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: { 
      '/api': {
        target: 'http://localhost:4932'
      }
    }
  }
};
