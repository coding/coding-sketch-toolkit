import sketch from 'sketch'

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const SymbolInstance = sketch.SymbolInstance

  const currentPage = document.selectedPage
  const notSymbolArrary = []

  // Create symbol instance under selected symbol
  selection.map(symbolMaster => {
    if (symbolMaster.symbolId) {
      let instance = new SymbolInstance({
        name: symbolMaster.name,
        parent: currentPage,
        frame: symbolMaster.frame,
        symbolId: symbolMaster.symbolId,
      })
      instance.frame.y = instance.frame.y + instance.frame.height   
    } else {
      notSymbolArrary.push(symbolMaster.name)
    }
  })

  // Show the layers which not symbol
  if (notSymbolArrary.length > 0 ) {
    sketch.UI.message(`‼️ Error: Layer '${notSymbolArrary.join(', ')}' not a symbol !`)
  }
}
