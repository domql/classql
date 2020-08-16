'use strict'

import { init } from '@rackai/domql/src/event/on'
import { exec, isObject } from '@rackai/domql/src/utils/object'

import params from './params'
import on from './on'

export default element => {
  element.nodes.forEach(node => {
    if (isObject(element.on)) on(element, node)

    for (let key in element) {
      var elemParam = element[key]
      var param = params[key]
      if (param) param(elemParam, element, node)
    }

    if (element.on && typeof element.on.init === 'function')
      init(element.on.init, element, node)
  })
}
