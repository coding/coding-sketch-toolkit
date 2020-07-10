const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const Settings = sketch.Settings

  const ciToken = Settings.documentSettingForKey(document, 'ci-token')
  const ciUrl = Settings.documentSettingForKey(document, 'ci-url')

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

  if (ciToken) {
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
  } else {
    console.log('The ci-token setting not found in this document! Make sure your current docmuent is Coding-Icons Library.')
    sketch.UI.alert('⛔️ Wrong File!', 'The ci-token setting not found in this document! \nPlease make sure current docmuent is the Coding-Icons Library.')
  }
}
