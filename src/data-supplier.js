const util = require('util')
const sketch = require('sketch/dom')
const DataSupplier = require('sketch/data-supplier')
const { dataCollection } = require('../assets/data/data.js')
const _ = require('lodash')

const getDataByName = dataName => _.shuffle(dataCollection.find(data => data.name == dataName).items)

export function onStartup() {
  DataSupplier.registerDataSupplier("public.text", "Project Name", "SupplyProjectName")
  DataSupplier.registerDataSupplier("public.text", "Commit Id", "SupplyCommitId")
  DataSupplier.registerDataSupplier("public.text", "Commit Id Sort", "SupplyCommitIdSort")
}

export function onShutdown() { 
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyProjectName(context) {
  supplyData(context, 'project name')
}

export function onSupplyCommitId(context) {
  supplyData(context, 'commit id')
}

export function onSupplyCommitIdSort(context) {
  let handleData = data => data.slice(0, 7)
  supplyData(context, 'commit id', handleData)
}

function supplyData(context, dataName, handleData = data => data) {
  let key = context.data.key
  let items = util.toArray(context.data.items).map(sketch.fromNative)
  let dataItems = getDataByName(dataName)
  items.map((item, i) => {
    console.log(`${i} - ${item.symbolInstance.name}`)
    let dataValue = handleData(dataItems[i % dataItems.length])
    DataSupplier.supplyDataAtIndex(key, dataValue, i)
  })
}