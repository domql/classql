'use strict'

import params from './params'
import events from './events'
import { exec, isObject } from '@rackai/domql/src/utils/object'

const update = function (newParams) {
  var element = this
  element.nodes.forEach(node => {
    for (let param in newParams) {
      var newParam = newParams[param]
      var method = params[param]
      if (method) method(newParam, element, node)
    }
  })
}

export default update