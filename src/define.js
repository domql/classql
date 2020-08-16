'use strict'

import params from './params'

export default (newParams, options = {}) => {
  var { overwrite } = options
  for (const param in newParams) {
    if (params[param] && !overwrite) {
      console.log('default param exists')
    } else params[param] = newParams[param]
  }
}
