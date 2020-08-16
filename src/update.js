'use strict'

import params from './params'
import on from './on'
import { exec, isObject } from '@rackai/domql/src/utils/object'

const update = function (newParams) {
  var element = this
  element.nodes.forEach(node => {
    if (isObject(newParams.on)) on(element, node)
    for (let param in newParams) {
      var newParam = newParams[param]
      var hasParam = params[param]
      if (hasParam) hasParam(newParam, element, node)
    }
  })

  // run onUpdate
  if (element.on && typeof element.on.update === 'function') {
    on.update(element.on.update, element, node)
  }
}

export default update