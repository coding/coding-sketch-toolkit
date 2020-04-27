const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const Group = sketch.Group
  const Style = sketch.Style
  const Rectangle = sketch.Rectangle
  const Artboard = sketch.Artboard
  const ShapePath = sketch.ShapePath
  const Text = sketch.Text
  const SymbolInstance = sketch.SymbolInstance

  // Make sure the "Page 1" page is exist and above the 'Symbols' page
  // Remove all layers in page 1
  document.pages[0].layers = []

  // Create artboard
  const iconsArtboard = new Artboard({
    name: 'CODING Icons',
    parent: document.pages[0],
    frame: new Rectangle(0, 0, 1000, 2000),
    background: {
     enabled: true,
     includedInExport: true,
     color: '#ffffff',
   }, 
  })

  // Define constants
  const symbols = document.getSymbols()
  const iconCatlogArray = []
  const iconCatlogNameArray = []

  // Define functions
  const getIconName = name => (
    name.replace(/^.*[\/]/, '')
  )
  const getIconCatlog = name => (
    name.replace(/[\/].*$/, '')
  )

  const createIconItem = (symbolId, iconName) => {
    let itemGroup = new Group({
      name: 'Icon Item',
      frame: new Rectangle(0, 0, 120, 80),
      parent: iconsArtboard,
    })
    let itemFrame = new ShapePath({
      name: 'Item Frame',
      frame: new Rectangle(0, 0, 120, 80),
      parent: itemGroup,
      style: {
        fills: [{color: '#ffffff'}],
        borders: [{
          color: '#dadfe6',
          position: Style.BorderPosition.Inside,
        }],
      },
    })
    let iconNameLayer = new Text({
      text: iconName,
      style: {
        textColor: '#606c80',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Verdana',
        fontWeight: 5,
        verticalAlignment: 'center',
        alignment: 'center',
        borders: [],
      },
    })
    let iconLayer = new SymbolInstance({
      name: 'Icon Layer',
      symbolId: symbolId,
      parent: itemGroup,
      frame: new Rectangle(52, 20, 16, 16),
    })

    itemGroup.adjustToFit()

    itemFrame.points.map(point => { point.cornerRadius = 2 })
    iconNameLayer.sketchObject.setTextBehaviour(2)
    iconNameLayer.frame = new Rectangle(10, 42, 100, 30)
    iconNameLayer.parent = itemGroup

    return itemGroup
  }

  const createCatlogGroup = catlogName => {
    let catlogGroup = new Group({
      name: catlogName + ' Catlog',
      frame: new Rectangle(0, 0, 120, 80),
      parent: iconsArtboard,
    })
    let catlogTitle = new Text({
      text: catlogName,
      frame: new Rectangle(-40, 0, 0, 0),
      style: {
        textColor: '#202D40',
        fontSize: 24,
        fontFamily: 'Verdana',
        fontWeight: 8,
        alignment: 'right',
        borders: [],
      },
    })
    catlogTitle.parent = catlogGroup

    return catlogGroup
  }

  const arrangeIconItem = (iconItems, columns = 5, marginX = 20, marginY = 20) => {
    iconItems.map((iconItem, i) => {
      let moveX = iconItem.frame.width + marginX
      let moveY = iconItem.frame.height + marginY
      let frameX = i % columns * moveX
      let frameY = Math.floor(i / columns) * moveY
      iconItem.frame.x = frameX
      iconItem.frame.y = frameY
    })
  }

  const arrangeCatlogItem = (catlogGroup, marginY = 20) => {
    let frameY = 0
    catlogGroup.map((catlogItem, i) => {
      catlogItem.frame.y = frameY
      frameY = frameY + catlogItem.frame.height + marginY
    })
  }

  const addPadding = (layer, paddingH = 100, paddingV = 100) => {
    layer.frame.width = paddingH * 2 + layer.frame.width
    layer.frame.height = paddingV * 2 + layer.frame.height
    layer.layers.map(sublayer => {
      sublayer.frame.x = sublayer.frame.x + paddingH
      sublayer.frame.y = sublayer.frame.y + paddingV
    })
  }

  // Create icon preview layers from all icon symbols
  symbols.map((symbol,i) => {
    let symbolName = symbol.name
    let symbolId = symbol.symbolId
    let iconName = getIconName(symbolName)
    let iconCatlogName = getIconCatlog(symbolName)

    let iconItem = createIconItem(symbolId, iconName)

    if (iconCatlogNameArray.includes(iconCatlogName)){
      iconItem.parent = iconCatlogArray[iconCatlogNameArray.indexOf(iconCatlogName)]
    } else {
      let iconCatlog = createCatlogGroup(iconCatlogName)
      iconCatlogArray.push(iconCatlog)
      iconCatlogNameArray.push(iconCatlogName)
      iconItem.parent = iconCatlog
    }
  })

  // Arrange layers and adjust artboard size
  iconCatlogArray.map(iconCatlog => {
    let [, ...iconItems] = iconCatlog.layers
    arrangeIconItem(iconItems, 8)
    iconCatlog.adjustToFit()
  })

  arrangeCatlogItem(iconsArtboard.layers)

  iconsArtboard.adjustToFit()

  addPadding(iconsArtboard)

  sketch.UI.message('🎉 New icons collection has been generated!')
}
