// 

const os_module = require('os')

// info about current user

const user = os_module.userInfo()

console.log('current user info:\n',user)

// system uptime

console.log('\nsystem uptime : %f ', os_module.uptime())

const curr_os = {
    name : os_module.type(),
    release: os_module.release(),
    totalMem: os_module.totalmem(),
    freeMem: os_module.freemem()
}

console.log('\nOS info:\n',curr_os)