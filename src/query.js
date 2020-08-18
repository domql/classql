'use strict'

import registry from './registry'
import apply from './apply'
import update from './update'
import { methods } from './methods'
import { is } from '@rackai/domql/src/event'

var query = params => {
  for (let key in params) {
    var element = params[key]
    var { query, node } = element
    var nodesArr = []

    if (is.node(node)) nodesArr = [node]
    else {
      var nodes = document.querySelectorAll(query)
      var { length } = nodes
      if (length === 0) console.warn(`Could not find element "${key}"`)
      nodes.forEach((node, key) => nodesArr[key] = node)
    }

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
