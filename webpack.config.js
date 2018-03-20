var webpack=require('webpack');
const path = require('path');
const config={

    entry:'./app/main.ts',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'app.bundle.js'
    },
    module:{
        "rules": [
            {
              "test": /\.ts$/,
              "loader": "ts-loader"
      
    }]
}

};

module.exports=config;