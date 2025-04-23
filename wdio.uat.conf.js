import merge from 'deepmerge'
//import wdioConf from './wdio.conf.js'
const wdioConf = require("./wdio.conf.js"); 


/* have main config file (wdio.conf.js) as default, and overwrite environment specific information with this file */

exports.config = merge(wdioConf.config, {
    before: function (capabilities, specs) {
            global.appUrl = '<<your uat environment URL here>>',
            global.environmentName = 'uat'
        },
}, { clone: false })