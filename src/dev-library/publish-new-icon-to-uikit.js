const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const Settings = sketch.Settings

  let ciToken = Settings.settingForKey('ci-token')
  let ciUrl = 'https://codingcorp.coding.net/api/cci/job/252169/trigger'

  function postIcon(iconCatalog, iconName, iconCode) {
    console.log(iconCatalog)
    console.log(iconName)
    console.log(iconCode)
    let requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": `Basic ${ciToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "ref": "master",
        "envs": [
          {
            "name": "ICON_CATALOG",
            "value": iconCatalog,
            "sensitive": 0
          },
          {
            "name": "ICON_NAME",
            "value": iconName,
            "sensitive": 0
          },
          {
            "name": "ICON_CODE",
            "value": iconCode.replace(/\\"/g, '\\\\"'),
            "sensitive": 0
          }
        ]
      })
    }
    fetch(ciUrl, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(() => sketch.UI.alert('🎉 Well Done!', 'The Merge Requset for new icon will be created in 1min. Please check it in the CodingUIKit project. \n \nThanks for your contribution. 你是 CODING 的骄傲！'))
      .catch(error => console.log('error', error)
    )
  }

  function main() {
    let iconCatalog = []
    let iconName = []
    let iconCode = []
    selection.map(layer => {
      console.log(layer.name)
      const options = { formats: 'svg', output: false, compact: true}
      const sketchSVG = sketch.export(layer, options)
      console.log(sketchSVG.toString())
      iconCatalog.push(layer.name.split('/')[0])
      iconName.push(layer.name.split('/')[1])
      iconCode.push(sketchSVG.toString())
    })
    postIcon(JSON.stringify(iconCatalog).toString(), JSON.stringify(iconName).toString(), JSON.stringify(iconCode).toString())
  }

  if (ciToken) {
    main()
  } else {
    sketch.UI.getInputFromUser(
      "第一次使用需填写 CI 触发令牌",
      {
        description: '访问此链接获取令牌 https://codingcorp.coding.net/p/Design-Center/wiki/1495',
        initialValue: '在此输入',
      },
      (err, value) => {
        if (err) {
          sketch.UI.message('Publish has been canceled.')
          return
        }
        Settings.setSettingForKey('ci-token', value)
        ciToken = Settings.settingForKey('ci-token')
        sketch.UI.message('Publish start ...')
        main()
      }
    )
  }
}
