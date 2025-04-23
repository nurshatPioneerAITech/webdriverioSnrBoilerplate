//import merge from 'deepmerge'
import { deepmerge } from 'deepmerge-ts'

const wdioConf = require("./wdio.conf.js")
/* have main config file (wdio.conf.js) as default, and overwrite environment specific information with this file */

exports.config = deepmerge(wdioConf.config, {
    before: function (capabilities, specs) {
        global.appUrl = 'https://www.timesheets.link/',
            global.environmentName = 'qa',
            global.LoginUserId = 'varshasinha13@gmail.com',
            global.LoginPassword = 'Timesheet@123'
    }
}, { clone: false })