const util = require('util')
const sketch = require('sketch/dom')
const DataSupplier = require('sketch/data-supplier')
const { dataCollection } = require('../assets/data/data.js')
const _ = require('lodash')

export function onStartup() {
  // DataSupplier.registerDataSupplier("public.image", "Project Avatar", "SupplyProjectAvatar")
  // DataSupplier.registerDataSupplier("public.image", "User Avatar", "SupplyUserAvatar")
  DataSupplier.registerDataSupplier("public.text", "Project Name", "SupplyProjectName")
  DataSupplier.registerDataSupplier("public.text", "User Name", "SupplyUserName")
  DataSupplier.registerDataSupplier("public.text", "Commit Id", "SupplyCommitId")
  DataSupplier.registerDataSupplier("public.text", "Commit Id - Sort", "SupplyCommitIdSort")
}

export function onShutdown() { 
  DataSupplier.deregisterDataSuppliers()
}

// export function onSupplyProjectAvatar(context) {
//   supplyRandomData(context, getDataByName('project avatar'))
// }

// export function onSupplyUserAvatar(context) {
//   supplyRandomData(context, getDataByName('user avatar'))
// }

export function onSupplyProjectName(context) {
  supplyRandomData(context, getDataByName('project name'))
}

export function onSupplyUserName(context) {
  supplyRandomData(context, getDataByName('user name'))
}

export function onSupplyCommitId(context) {
  supplyRandomData(context, getDataByName('commit id'))
}

export function onSupplyCommitIdSort(context) {
  let handleData = data => data.slice(0, 7)
  supplyRandomData(context, getDataByName('commit id'), handleData)
}

const getDataByName = dataName => _.shuffle(dataCollection.find(data => data.name == dataName).items)

const supplyRandomData = (context, dataArray, handleData = data => data) => {
  let key = context.data.key
  let items = util.toArray(context.data.items).map(sketch.fromNative)
  items.map((item, i) => {
    (item.symbolInstance) ? 
      console.log(`${i} - ${item.symbolInstance.name}`) :
      console.log(`${i} - ${item.name}`)
    let dataValue = handleData(dataArray[i % dataArray.length])
    DataSupplier.supplyDataAtIndex(key, dataValue, i)
  })
}