const util = require('util')
const sketch = require('sketch/dom')
const DataSupplier = require('sketch/data-supplier')
const dataCollection = require('../assets/data/data.js')
const _ = require('lodash')

export function onStartup() {
  DataSupplier.registerDataSupplier("public.text", "Project Name", "SupplyProjectName")
}

export function onShutdown() { 
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyProjectName(context) {
  let key = context.data.key
  let items = util.toArray(context.data.items).map(sketch.fromNative)
  let dataItems = _.shuffle(dataCollection.default.find(data => data.name == 'project name').items)
  console.log(dataItems)
  items.map((item, i) => {
    console.log(item)
    DataSupplier.supplyDataAtIndex(key, dataItems[i % dataItems.length], i)
  })
}
