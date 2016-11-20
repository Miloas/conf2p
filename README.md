# conf2p
> lol

# Use
```javascript
//input.conf
# xxx
a=3
b=true

//index.js
const conf2p = require('conf2p')
console.log(conf2p('input.conf')) // --a=3 --b=true
```