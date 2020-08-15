'use strict'

import {
  attr,
  classList,
  data,
  style,
  html
} from '@rackai/domql/src/element/params'

export default {
  attr,
  class: classList,
  data,
  style,
  text: (param, element, node) => {
    node.innerText = param
  },
  html
}