const {ipcMain} = require('electron')

ipcMain.on('canal', (evento, argumento) => {
    console.log(argumento)

    evento.reply('canal', 'teste')
})