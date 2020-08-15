'use strict'

import params from './params'
import events from './events'
import { exec, isObject } from '@rackai/domql/src/utils/object'

export default element => {
  element.nodes.forEach(node => {
    if (isObject(element.on)) events(element, node)
    for (let param in element) {
      var elemParam = element[param]
      var method = params[param]
      if (method) method(elemParam, element, node)
    }
  })
}
