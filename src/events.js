'use strict'

import * as on from '@rackai/domql/src/event/on'

on.init = (param, element, node) => {
  param(element)
}

export default (element, node) => {
  for (const param in element.on) {
    if (param === 'init' || param === 'render') continue
    var appliedFunction = element.on[param]
    var registeredFunction = on[param]
    if (typeof appliedFunction === 'function' &&
        typeof registeredFunction === 'function') {
      registeredFunction(appliedFunction, element, node)
    }
  }
}