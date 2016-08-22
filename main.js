const Promise = require('es6-promise').Promise;
const electron = require('electron');
const {app, BrowserWindow, Menu, Tray} = electron;

require('electron-reload')(__filename, {
  electron: require('electron-prebuilt')
});

let win;
let tray;

function installExtensions() {
  const installer = require('electron-devtools-installer');
  return Promise.all([
    installer.default(installer['REACT_DEVELOPER_TOOLS'], true),
    installer.default(installer['REDUX_DEVTOOLS'], true)
  ]).then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}
function installExtensionsMunally() {
  const dir = 'C:/Users/hoga/AppData/Local/Google/Chrome/User Data/Default/Extensions';
  const reactTool = dir + '/fmkadmapgofadopljbjfkapdkoienihi/0.15.1_0';
  const reduxTool = dir + '/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.1.2_0';
  BrowserWindow.addDevToolsExtension(reactTool);
  BrowserWindow.addDevToolsExtension(reduxTool);
  return Promise.resolve();
}

function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: 280, height: 320,
    x: width - 300, y: height - 330,
    frame: false,
    fullscreenable: false
  });

  win.loadURL(`file://${__dirname}/app/index.html`);
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

function createTray() {
  tray = new Tray(require('path').join(__dirname, 'assets/icons/tray.png'));
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => {
    if (win.isVisible()) win.hide();
    else win.show();
  });
}

app.on('ready', () => {
  createTray();
  installExtensionsMunally().then(createWindow);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // mac os.
  if (win === null) {
    createWindow();
  }
});
