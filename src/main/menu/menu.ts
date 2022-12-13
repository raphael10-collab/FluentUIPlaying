import {
  BrowserWindow,
  BrowserView,
  Menu,
  MenuItem,
  ipcMain,
  app,
  shell,
  dialog,
  MenuItemConstructorOptions,
  globalShortcut
} from 'electron'

// https://github.com/Rajaniraiyn/raj-browser/blob/main/src/main/index.ts
import { electronApp, optimizer, is, platform } from '@electron-toolkit/utils'
import { ElectronBlocker } from '@cliqz/adblocker-electron'
import electronDl from 'electron-dl'
import contextMenu from 'electron-context-menu'
import fetch from 'node-fetch'
import { readFile, writeFile } from 'fs/promises'

// https://github.com/electron/electron/blob/v18.2.0/docs/fiddles/menus/customize-menus/main.js

import path from 'path'
import fs from 'fs'

const template: MenuItemConstructorOptions[] = [
  {
    role: 'fileMenu',
    submenu: [
      {
        role: 'quit'
      }
    ]
  },

  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: (item, focusedWindow) => {
          if (focusedWindow.id === 1){
            BrowserWindow.getAllWindows().forEach(win => {
              if (win.id > 1) win.close()
            })
          }
          focusedWindow.reload()
        }
      }
    ]
  }

]




const menu = Menu.buildFromTemplate(template)
export default menu
