const path = require('path');

module.exports = {
    entry: './index.js', // Path to your main server file
    target: 'node',      // Set target to 'node' for a Node.js environment
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',  // Can be 'development' for dev mode
};
