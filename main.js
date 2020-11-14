const { app, session, BrowserWindow } = require('electron');
const path = require('path');


(async () => {
  await app.whenReady()
  await session.defaultSession.loadExtension(path.join(__dirname, 'cross-request'))

  const bw = new BrowserWindow({webPreferences: {sandbox: true}})
  bw.loadURL('http://yapi.ncltkj.cn')
  bw.removeMenu();
})()
app.on("web-contents-created", (event, contents) => {
  console.log(contents.history)
})