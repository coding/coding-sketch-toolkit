const sketch = require('sketch')

export default function() {
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const libraries = sketch.getLibraries()
 
  // Data for icon update action
  const colorList = [
    { name: 'Color/Black', value: '#000000' },
    { name: 'Color/White', value: '#ffffff' },
    { name: 'Color/Gray06', value: '#202D40' },
    { name: 'Color/Gray05', value: '#606C80' },
    { name: 'Color/Gray04', value: '#8592A6' },
    { name: 'Color/Gray03', value: '#ADBACC' },
    { name: 'Color/Gray02', value: '#DADFE6' },
    { name: 'Color/Gray01', value: '#F5F7FA' },
    { name: 'Color/Blue06', value: '#0052CC' },
    { name: 'Color/Blue05', value: '#0066FF' },
    { name: 'Color/Blue04', value: '#3D98FF' },
    { name: 'Color/Blue03', value: '#8CC6FF' },
    { name: 'Color/Blue02', value: '#CCEAFF' },
    { name: 'Color/Blue01', value: '#E6F7FF' },
    { name: 'Color/Green03', value: '#3EA00E' },
    { name: 'Color/Green02', value: '#4FBE0E' },
    { name: 'Color/Green01', value: '#7AD93A' },
    { name: 'Color/Red03', value: '#CA1628' },
    { name: 'Color/Red02', value: '#EB333F' },
    { name: 'Color/Red01', value: '#F76469' },
    { name: 'Color/Yellow03', value: '#CE9C09' },
    { name: 'Color/Yellow02', value: '#EDB807' },
    { name: 'Color/Yellow01', value: '#FBD341' }
  ]

  const iconNameData = [
    { 
      old_name: 'Arrows/angle-double-down',
      new_name: 'Arrows/Angle Double Down', 
    },
    { 
      old_name: 'Arrows/angle-double-left',
      new_name: 'Arrows/Angle Double Left', 
    },
    { 
      old_name: 'Arrows/angle-double-right',
      new_name: 'Arrows/Angle Double Right', 
    },
    { 
      old_name: 'Arrows/angle-double-up',
      new_name: 'Arrows/Angle Double Up', 
    },
    { 
      old_name: 'Arrows/angle-down',
      new_name: 'Arrows/Angle Down', 
    },
    { 
      old_name: 'Arrows/angle-left',
      new_name: 'Arrows/Angle Left', 
    },
    { 
      old_name: 'Arrows/angle-right',
      new_name: 'Arrows/Angle Right', 
    },
    { 
      old_name: 'Arrows/angle-up',
      new_name: 'Arrows/Angle Up', 
    },
    { 
      old_name: 'Arrows/arrow-circle-o-down',
      new_name: 'Arrows/Arrow Circle Down', 
    },
    { 
      old_name: 'Arrows/arrow-circle-o-right',
      new_name: 'Arrows/Arrow Circle Left', 
    },
    { 
      old_name: 'Arrows/arrow-circle-o-right',
      new_name: 'Arrows/Arrow Circle Right', 
    },
    { 
      old_name: 'Arrows/arrow-circle-o-up',
      new_name: 'Arrows/Arrow Circle Up', 
    },
    { 
      old_name: 'Arrows/arrow-down',
      new_name: 'Arrows/Arrow Down', 
    },
    { 
      old_name: 'Arrows/arrow-left',
      new_name: 'Arrows/Arrow Left', 
    },
    { 
      old_name: 'Arrows/arrow-right',
      new_name: 'Arrows/Arrow Right', 
    },
    { 
      old_name: 'Arrows/arrow-up',
      new_name: 'Arrows/Arrow Up', 
    },
    { 
      old_name: 'Arrows/caret-down-square',
      new_name: 'Arrows/Caret Down Square', 
    },
    { 
      old_name: 'Arrows/caret-down',
      new_name: 'Arrows/Caret Down', 
    },
    { 
      old_name: 'Arrows/caret-left',
      new_name: 'Arrows/Caret Left', 
    },
    { 
      old_name: 'Arrows/caret-right',
      new_name: 'Arrows/Caret Right', 
    },
    { 
      old_name: 'Arrows/caret-up-square',
      new_name: 'Arrows/Caret Up Square', 
    },
    { 
      old_name: 'Arrows/caret-up',
      new_name: 'Arrows/Caret Up', 
    },
    { 
      old_name: 'Arrows/chevron-down',
      new_name: 'Arrows/Chevron Down', 
    },
    { 
      old_name: 'Arrows/chevron-left',
      new_name: 'Arrows/Chevron Left', 
    },
    { 
      old_name: 'Arrows/chevron-right',
      new_name: 'Arrows/Chevron Right', 
    },
    { 
      old_name: 'Arrows/chevron-up',
      new_name: 'Arrows/Chevron Up', 
    },
    { 
      old_name: 'Arrows/refresh',
      new_name: 'Arrows/Circulation', 
    },
    { 
      old_name: 'Arrows/exchange',
      new_name: 'Arrows/Exchange', 
    },
    { 
      old_name: 'Arrows/arrows-v',
      new_name: 'Arrows/Expand V', 
    },
    { 
      old_name: 'Arrows/level-down',
      new_name: 'Arrows/Level Down', 
    },
    { 
      old_name: 'Arrows/random',
      new_name: 'Arrows/Random', 
    },
    { 
      old_name: 'Arrows/history',
      new_name: 'Arrows/Refresh', 
    },
    { 
      old_name: 'Arrows/repeat',
      new_name: 'Arrows/Repeat', 
    },
    { 
      old_name: 'Arrows/rotate-left',
      new_name: 'Arrows/Rotate Left', 
    },
    { 
      old_name: 'Arrows/sync',
      new_name: 'Arrows/Sync', 
    },
    { 
      old_name: 'Arrows/thumbs-down',
      new_name: 'Arrows/Thumbs Down', 
    },
    { 
      old_name: 'Arrows/thumbs-up',
      new_name: 'Arrows/Thumbs Up', 
    },
    { 
      old_name: 'Arrows/undo',
      new_name: 'Arrows/Undo', 
    },
    { 
      old_name: 'Menu/bug',
      new_name: 'Dev/Bug', 
    },
    { 
      old_name: 'Menu/code',
      new_name: 'Dev/Code', 
    },
    { 
      old_name: 'Menu/flask',
      new_name: 'Dev/Flask', 
    },
    { 
      old_name: 'Projects/git-branch',
      new_name: 'Dev/Git Branch', 
    },
    { 
      old_name: 'Projects/git-commit',
      new_name: 'Dev/Git Commit', 
    },
    { 
      old_name: 'Projects/git-fork',
      new_name: 'Dev/Git Fork', 
    },
    { 
      old_name: 'Projects/merge-request',
      new_name: 'Dev/Git Merge Request', 
    },
    { 
      old_name: 'Menu/infinity',
      new_name: 'Dev/Infinity', 
    },
    { 
      old_name: 'Menu/cubes',
      new_name: 'Dev/Package', 
    },
    { 
      old_name: 'Menu/rocket',
      new_name: 'Dev/Rocket', 
    },
    { 
      old_name: 'Editor/align-left',
      new_name: 'Editor/Align Left', 
    },
    { 
      old_name: 'Editor/align-right',
      new_name: 'Editor/Align Right', 
    },
    { 
      old_name: 'Editor/bold',
      new_name: 'Editor/Bold', 
    },
    { 
      old_name: 'Editor/compress',
      new_name: 'Editor/Compress', 
    },
    { 
      old_name: 'Editor/edit',
      new_name: 'Editor/Edit', 
    },
    { 
      old_name: 'Editor/ellipsis-h',
      new_name: 'Editor/Ellipsis H', 
    },
    { 
      old_name: 'Editor/ellipsis-v',
      new_name: 'Editor/Ellipsis V', 
    },
    { 
      old_name: 'Editor/expand',
      new_name: 'Editor/Expand', 
    },
    { 
      old_name: 'Editor/eye-slash',
      new_name: 'Editor/Eye Slash', 
    },
    { 
      old_name: 'Editor/eye',
      new_name: 'Editor/Eye', 
    },
    { 
      old_name: 'Editor/md-form',
      new_name: 'Editor/Form', 
    },
    { 
      old_name: 'Editor/headline',
      new_name: 'Editor/Headline', 
    },
    { 
      old_name: 'Editor/md-image',
      new_name: 'Editor/Image', 
    },
    { 
      old_name: 'Editor/md-italic',
      new_name: 'Editor/Italic', 
    },
    { 
      old_name: 'Editor/list',
      new_name: 'Editor/List', 
    },
    { 
      old_name: 'Editor/magic',
      new_name: 'Editor/Magic', 
    },
    { 
      old_name: 'Editor/minus-square-o',
      new_name: 'Editor/Minus Square', 
    },
    { 
      old_name: 'Editor/minus',
      new_name: 'Editor/Minus', 
    },
    { 
      old_name: 'Editor/md-number',
      new_name: 'Editor/Number Sign', 
    },
    { 
      old_name: 'Editor/ordered-list',
      new_name: 'Editor/Ordered List', 
    },
    { 
      old_name: 'Editor/pencil',
      new_name: 'Editor/Pencil', 
    },
    { 
      old_name: 'Editor/plus-circle',
      new_name: 'Editor/Plus Circle', 
    },
    { 
      old_name: 'Editor/plus-square',
      new_name: 'Editor/Plus Square', 
    },
    { 
      old_name: 'Editor/plus',
      new_name: 'Editor/Plus', 
    },
    { 
      old_name: 'Editor/md-reference',
      new_name: 'Editor/Quote', 
    },
    { 
      old_name: 'Files/book',
      new_name: 'Files/Book', 
    },
    { 
      old_name: 'Files/clipboard',
      new_name: 'Files/Clipboard', 
    },
    { 
      old_name: 'Files/cloud-download',
      new_name: 'Files/Cloud Download', 
    },
    { 
      old_name: 'Files/cloud-upload',
      new_name: 'Files/Cloud Upload', 
    },
    { 
      old_name: 'Files/copy',
      new_name: 'Files/Copy', 
    },
    { 
      old_name: 'Files/download',
      new_name: 'Files/Download', 
    },
    { 
      old_name: 'Files/file-archive-o',
      new_name: 'Files/File Archive', 
    },
    { 
      old_name: 'Files/coding-search',
      new_name: 'Files/File Search', 
    },
    { 
      old_name: 'Files/file-text-o',
      new_name: 'Files/File Text', 
    },
    { 
      old_name: 'Files/file-o',
      new_name: 'Files/File', 
    },
    { 
      old_name: 'Menu/file',
      new_name: 'Files/File', 
    },
    { 
      old_name: 'Files/folder-open',
      new_name: 'Files/Folder Open', 
    },
    { 
      old_name: 'Files/folder',
      new_name: 'Files/Folder', 
    },
    { 
      old_name: 'Menu/wiki',
      new_name: 'Files/Format Word', 
    },
    { 
      old_name: 'Files/share-square-o',
      new_name: 'Projects/Sign Out', 
    },
    { 
      old_name: 'Files/coding-share',
      new_name: 'Files/Share', 
    },
    { 
      old_name: 'Projects/version',
      new_name: 'Files/Version', 
    },
    { 
      old_name: 'Projects/adjust',
      new_name: 'Projects/Adjust', 
    },
    { 
      old_name: 'Projects/coding-at',
      new_name: 'Projects/At', 
    },
    { 
      old_name: 'Menu/bell',
      new_name: 'Projects/Bell', 
    },
    { 
      old_name: 'Projects/building',
      new_name: 'Projects/Building', 
    },
    { 
      old_name: 'Projects/bullhorn',
      new_name: 'Projects/Bullhorn', 
    },
    { 
      old_name: 'Projects/calendar',
      new_name: 'Projects/Calendar', 
    },
    { 
      old_name: 'Projects/chain',
      new_name: 'Projects/Chain', 
    },
    { 
      old_name: 'Projects/clock-o',
      new_name: 'Projects/Clock', 
    },
    { 
      old_name: 'Menu/cloud-studio',
      new_name: 'Projects/Cloud Studio', 
    },
    { 
      old_name: 'Projects/coffee',
      new_name: 'Projects/Coffee', 
    },
    { 
      old_name: 'Menu/cog',
      new_name: 'Projects/Cog', 
    },
    { 
      old_name: 'Projects/comment',
      new_name: 'Projects/Comment', 
    },
    { 
      old_name: 'Projects/comments',
      new_name: 'Projects/Comments', 
    },
    { 
      old_name: 'Projects/cube',
      new_name: 'Projects/Cube', 
    },
    { 
      old_name: 'Projects/dashboard',
      new_name: 'Projects/Dashboard', 
    },
    { 
      old_name: 'Projects/duration',
      new_name: 'Projects/Duration', 
    },
    { 
      old_name: 'Projects/envelope',
      new_name: 'Projects/Envelope', 
    },
    { 
      old_name: 'Projects/external-link',
      new_name: 'Projects/External Link', 
    },
    { 
      old_name: 'Projects/flag',
      new_name: 'Projects/Flag', 
    },
    { 
      old_name: 'Projects/map-signs',
      new_name: 'Projects/Flag', 
    },
    { 
      old_name: 'Projects/globe',
      new_name: 'Projects/Globe', 
    },
    { 
      old_name: 'Projects/group',
      new_name: 'Projects/Group', 
    },
    { 
      old_name: 'Projects/heart',
      new_name: 'Projects/Heart', 
    },
    { 
      old_name: 'Projects/inbox',
      new_name: 'Projects/Inbox', 
    },
    { 
      old_name: 'Menu/iteration',
      new_name: 'Projects/Iteration', 
    },
    { 
      old_name: 'Projects/key',
      new_name: 'Projects/Key', 
    },
    { 
      old_name: 'Projects/qcloud-workbench',
      new_name: 'Projects/Laptop', 
    },
    { 
      old_name: 'Menu/lightbulb-o',
      new_name: 'Projects/Lightbulb', 
    },
    { 
      old_name: 'Menu/line-chart',
      new_name: 'Projects/Line Chart', 
    },
    { 
      old_name: 'Projects/lock',
      new_name: 'Projects/Lock', 
    },
    { 
      old_name: 'Projects/map-maler',
      new_name: 'Projects/Map Marker', 
    },
    { 
      old_name: 'Projects/project',
      new_name: 'Projects/Project', 
    },
    { 
      old_name: 'Projects/mail-reply',
      new_name: 'Projects/Reply', 
    },
    { 
      old_name: 'Projects/search',
      new_name: 'Projects/Search', 
    },
    { 
      old_name: 'Projects/shield',
      new_name: 'Projects/Shield', 
    },
    { 
      old_name: 'Status/shield',
      new_name: 'Projects/Shield', 
    },
    { 
      old_name: 'Projects/shopping-cart',
      new_name: 'Projects/Shopping Cart', 
    },
    { 
      old_name: 'Projects/sign-out',
      new_name: 'Projects/Sign Out', 
    },
    { 
      old_name: 'Projects/sitemap',
      new_name: 'Projects/Sitemap', 
    },
    { 
      old_name: 'Projects/smile-o',
      new_name: 'Projects/Smile', 
    },
    { 
      old_name: 'Projects/star',
      new_name: 'Projects/Star', 
    },
    { 
      old_name: 'Projects/tag',
      new_name: 'Projects/Tag', 
    },
    { 
      old_name: 'Projects/tags',
      new_name: 'Projects/Tags', 
    },
    { 
      old_name: 'Menu/tasks',
      new_name: 'Projects/Tasks', 
    },
    { 
      old_name: 'Projects/template',
      new_name: 'Projects/Template', 
    },
    { 
      old_name: 'Projects/thumb-tack',
      new_name: 'Projects/Thumb Tack', 
    },
    { 
      old_name: 'Projects/ticket',
      new_name: 'Projects/Ticket', 
    },
    { 
      old_name: 'Projects/th-large',
      new_name: 'Projects/Tiles', 
    },
    { 
      old_name: 'Projects/trash-o',
      new_name: 'Projects/Trash', 
    },
    { 
      old_name: 'Projects/umbrella',
      new_name: 'Projects/Umbrella', 
    },
    { 
      old_name: 'Projects/unlink',
      new_name: 'Projects/Unlink', 
    },
    { 
      old_name: 'Projects/unlock',
      new_name: 'Projects/Unlock', 
    },
    { 
      old_name: 'Projects/user-plus',
      new_name: 'Projects/User Plus', 
    },
    { 
      old_name: 'Projects/user',
      new_name: 'Projects/User', 
    },
    { 
      old_name: 'Projects/wechat',
      new_name: 'Projects/Wechat', 
    },
    { 
      old_name: 'Projects/wrench',
      new_name: 'Projects/Wrench', 
    },
    { 
      old_name: 'Status/check-circle',
      new_name: 'Status/Check Circle', 
    },
    { 
      old_name: 'Status/check-square-o',
      new_name: 'Status/Check Square', 
    },
    { 
      old_name: 'Status/check',
      new_name: 'Status/Check', 
    },
    { 
      old_name: 'Status/circle',
      new_name: 'Status/Circle', 
    },
    { 
      old_name: 'Status/times-circle',
      new_name: 'Status/Close Circle', 
    },
    { 
      old_name: 'Status/close',
      new_name: 'Status/Close', 
    },
    { 
      old_name: 'Status/dot-circle-o',
      new_name: 'Status/Dot Circle', 
    },
    { 
      old_name: 'Status/exclamation-circle',
      new_name: 'Status/Exclamation Circle', 
    },
    { 
      old_name: 'Status/exclamation-triangle',
      new_name: 'Status/Exclamation Triangle', 
    },
    { 
      old_name: 'Status/info-circle',
      new_name: 'Status/Info Circle', 
    },
    { 
      old_name: 'Status/info',
      new_name: 'Status/Info', 
    },
    { 
      old_name: 'Status/loading',
      new_name: 'Status/Loading', 
    },
    { 
      old_name: 'Status/question-circle',
      new_name: 'Status/Question Circle', 
    },
    { 
      old_name: 'Status/question',
      new_name: 'Status/Question', 
    },
    { 
      old_name: 'Status/square-o',
      new_name: 'Status/Square', 
    },
    { 
      old_name: 'Status/coding-no-newline',
      new_name: 'Status/Stop', 
    },
    { 
      old_name: 'Status/stop',
      new_name: 'Status/Stop', 
    },
  ]

  // Get icon symbols from new icon library
  const getLibrary = libraryId => libraries.find(item => item.id == libraryId)
  const newIconLibraryId = 'b07c59cc-1c5b-40fe-b685-2134c3f9f77c'
  const newIconLibrary = getLibrary(newIconLibraryId)
  const symbolReferences = newIconLibrary.getImportableSymbolReferencesForDocument( document )
  
  // Define some functions for icon upate action
  const getSymbolName = symbolLayer => (document.getSymbolMasterWithID(symbolLayer.symbolId).name)
  
  const getSymbolColorName = symbolLayer => {
    let colorSymbolId = symbolLayer.overrides[0].value
    let colorSymbol = document.getSymbolMasterWithID(colorSymbolId)
    return colorSymbol.name
  }
  const findNewIconName = oldIconName => {
    console.log(oldIconName)
    let matchIconName = iconNameData.find(item => item.old_name == oldIconName )
    console.log(matchIconName)
    return matchIconName.new_name
  }

  const getSymbolId = targetIconName => {
    let matchIconSymbol = symbolReferences.find(item => item.name == targetIconName )
    let importedIconSymbol = matchIconSymbol.import()
    return importedIconSymbol.symbolId
  }

  const getIconColor = colorName => {
     let matchColor = colorList.find(item => (item.name == colorName))
     return matchColor.value
  }

  // Exec icon update action for each selection object
  selection.map(layer => {
    let symbolName = getSymbolName(layer)
    let symbolColor = getSymbolColorName(layer)
    console.log(symbolName)
    let targetIconName = findNewIconName(symbolName)
    let targetSymbolId = getSymbolId(targetIconName)
    layer.symbolId = targetSymbolId
    let iconColor = getIconColor(symbolColor)
    console.log(iconColor)
    layer.style.fills = [{
      color: iconColor
    }]
  })
}
