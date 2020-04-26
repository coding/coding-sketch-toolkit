# CODING Toolkit Sketch Plugin

<img src='https://user-images.githubusercontent.com/5106039/80296781-61060600-87b0-11ea-8dd4-d9a15d29d9cd.png' width='674px'>

## 插件命令

### 1. Update Icon 升级图标
用于替换旧版 CODING Icon 至新版 CODING Icon，在设计稿中选中来自旧版的 CODING Icon Library 的 symbol 然后执行此命令即可自动替换为对应的新版 CODING ICON，并且保留原来 icon 覆盖的颜色。

### 2. Genrarte Icon Library Collection 生成图标合集
用与在 CODING Icon Library 文件中修改或添加 icon 后重新生成 icon 集合，以便在 Abstract 中查找 icon。执行此命令将会自动删除原 Page 1 中的 icon collection 画板然后重新生成新的画板。
更新 CODING Icon 的具体方法请查看此 [Wiki](https://codingcorp.coding.net/p/Design-Center/wiki/1495)

## Installation

- [Download](../../releases/latest/download/coding-toolkit.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on coding-toolkit.sketchplugin

## Development Guide

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

### Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Run `skpm log` in your Terminal, with the optional `-f` argument (`skpm log -f`) which causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

