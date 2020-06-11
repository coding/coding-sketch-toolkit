const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers

  function postIcon(iconCatalog, iconName, iconCode) {
    let requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": "Basic cHQxMTVrMnBmcDU0OmJmM2NiNWYzM2M0ZGU5ZmJlNmNjYWFhNjZhM2QwZmEwYzAxY2Q3ODk=",
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
            "value": iconCode.replace(/"/g, '\\\"'),
            "sensitive": 0
          }
        ]
      })
    }

    fetch("https://codingcorp.coding.net/api/cci/job/168479/trigger", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  selection.map(layer => {
    console.log(layer)
    const options = { formats: 'svg', output: false, compact: true}
    const sketchSVG = sketch.export(layer, options)
    console.log(sketchSVG.toString())
    postIcon("Arrow", "right-arrow", sketchSVG.toString())
  })

  sketch.UI.message("Well Done!")

}
