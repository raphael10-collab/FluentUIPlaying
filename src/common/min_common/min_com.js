export function sendIPCToWindow (window, action, data) {
  if (window && window.webContents && window.webContents.isLoadingMainFrame()) {
    // immediately after a did-finish-load event, isLoading can still be true,
    // so wait a bit to confirm that the page is really loading
    setTimeout(function() {
      if (window.webContents.isLoadingMainFrame()) {
        window.webContents.once('did-finish-load', function () {
          window.webContents.send(action, data || {})
        })
      } else {
        window.webContents.send(action, data || {})
      }
    }, 0)
  } else if (window) {
    window.webContents.send(action, data || {})
  } else {
    var window = createWindow()
    window.webContents.once('did-finish-load', function () {
      window.webContents.send(action, data || {})
    })
  }
}

function openTabInWindow (url) {
  sendIPCToWindow(mainWindow, 'addTab', {
    url: url
  })
}
