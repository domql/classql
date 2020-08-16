'use strict'

import '@rackai/domql'

import query from './query'
import registry from './registry'
import define from './define'
import find from './find'
import { methods, setMethod } from './methods'

export default {
  registry,
  query,
  define,
  find,
  methods,
  setMethod
}
