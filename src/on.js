'use strict'

import * as events from '@rackai/domql/src/event/on'

events.init = (param, element, node) => {
  param.call(element, element, node)
}

export default (element, node) => {
  for (const param in element.on) {
    if (param === 'init' || param === 'render') continue

    var appliedFunction = element.on[param]
    if (typeof appliedFunction === 'function') {
      node.addEventListener(param, event => appliedFunction(event, element), true)
    }
  }
}