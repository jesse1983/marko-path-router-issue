const index = require('./index.marko');
index.renderSync().replaceChildrenOf(document.body);