'use strict'

import params from './params'

export default (newParams, options = {}) => {
  var { overwrite } = options
  for (const param in newParams) {
    if (params[param] && !overwrite) {
      console.log(`Can't overwrite to default params. Use { overwrite: true } to force update`)
    } else params[param] = newParams[param]
  }
}
