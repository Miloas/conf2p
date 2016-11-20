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
let obj = new conf2p('input.conf')
console.log(await obj.toString()) // --a=3 --b=true
console.log(await obj.toDic()) // {a: 3, b: true}
```