'use strict'

import registry from './registry'

export default query => registry[query] || console.warn(`Can't find element "${query}"`)
