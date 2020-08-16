'use strict'

import registry from './registry'

export default query => registry[query] || console.warn(`can't find ${query}`)
