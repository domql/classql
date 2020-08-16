'use strict'

import registry from './registry'
import apply from './apply'
import update from './update'
import { methods } from './methods'

var query = params => {
  for (let key in params) {
    var element = params[key]
    var { query } = element

    var nodes = document.querySelectorAll(query)
    if (nodes.length === 0) console.warn(`could not find`, key)

    var nodesArr = []
    nodes.forEach((node, key) => nodesArr[key] = node)

    element.nodes = nodesArr
    element.key = key
    element.update = update

    for (var one in methods) if (key !== one) element[one] = methods[one]
    
    registry[key] = params[key]

    apply(element)
  }

  return registry
}

export default query
