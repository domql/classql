'use strict'

import registry from './registry'
import apply from './apply'
import update from './update'

var query = params => {
  for (let key in params) {
    var element = params[key]
    var { query } = element

    var nodes = document.querySelectorAll(query)

    var nodesArr = []
    nodes.forEach((node, key) => nodesArr[key] = node)

    element.nodes = nodesArr
    element.key = key
    element.update = update
    
    registry[key] = params[key]

    apply(element)
  }

  return registry
}

export default query
