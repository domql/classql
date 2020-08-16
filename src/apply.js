'use strict'

import params from './params'
import events from './events'
import { exec, isObject } from '@rackai/domql/src/utils/object'
import { init } from '@rackai/domql/src/event/on'

console.log(init)

export default element => {
  element.nodes.forEach(node => {
    if (isObject(element.on)) events(element, node)
    for (let param in element) {
      var elemParam = element[param]
      var method = params[param]
      if (method) method(elemParam, element, node)
    }
    if (element.on && typeof element.on.init === 'function') init(element.on.init, element, node)
  })
}
