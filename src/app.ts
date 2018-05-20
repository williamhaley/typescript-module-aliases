declare var require: any         // Comment this out to see things break
require('module-alias/register') // Comment this out to see things break

import Dog from '@animals/dog'
import { Cat } from '@animals/cat'
import Bird from '@myapp/animals/bird'

console.log('Hello from app.ts')
new Dog()
new Cat()
