# **Agari**

麻雀アガリ和了形計算  
Japanese riichi mahjong hand agari calculation  

**Install with npm:**

```shell
# npm i agari
```

**Use in browser:**

```html
<script src="https://cdn.jsdelivr.net/npm/agari"></script>
```

**Usage:**

```js
const agari = require('agari')
let hai = [
    [3,1,1,3,0,0,0,0,0], //萬子
    [3,0,0,0,0,0,0,0,0], //筒子
    [3,0,0,0,0,0,0,0,0], //索子
    [0,0,0,0,0,0,0]      //字牌
]
console.log(agari(hai))
```

Output:

```js
[
    //和了形1
    [
        '1m', //雀頭
        [ '1m', '2m', '3m' ], //順子
        [ '1p' ], //刻子
        [ '1s' ], //刻子
        [ '4m' ]  //刻子
    ],
    //和了形2
    [
        [ '1m' ], //刻子
        [ '1p' ], //刻子
        [ '1s' ], //刻子
        [ '2m', '3m', '4m' ], //順子
        '4m' //雀頭
    ]
]
```

"m,p,s,z" means "萬子,筒子,索子,字牌"  
"1z-7z" means "東南西北白發中"

**Check only:**

```js
const agari = require('agari')

//check 一般形
agari.check([
    [3,1,1,1,2,1,1,1,3],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return true

//check7 七対子形
agari.check7([
    [2,0,2,2,2,2,2,0,2],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return true

//check13 国士形
agari.check13([
    [1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,1,1,1,2,1,1]
]) //return true

//check all types
agari.checkAll([
    [1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return boolean
```
