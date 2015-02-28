require('babel/register')({
    extensions: ['.js'],
    loose: 'all',
    experimental: true,
    blacklist: [
        'react',
        'es3.memberExpressionLiterals', 'es3.propertyLiterals',
        'regenerator', 'es6.constants', 'es6.blockScoping', 'es6.templateLiterals'
    ],
    optional: ['runtime']
});

module.exports = require('./bug');