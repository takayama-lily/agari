## Agari
Riichi Mahjong hand agari calculation

**Install with npm:**
```
$ npm i agari
```

**Usage:**
```js
const agari = require('agari')
let haiArr = [
    [3,1,1,3,0,0,0,0,0], //萬子
    [3,0,0,0,0,0,0,0,0], //筒子
    [3,0,0,0,0,0,0,0,0], //索子
    [0,0,0,0,0,0,0]      //字牌
]
console.log(agari(haiArr))
```
You will get an array result includes all the patterns of agari:
```js
[
    [
        '1m', //雀頭
        [ '1m', '2m', '3m' ], //順子
        [ '1p' ], //暗刻
        [ '1s' ], //暗刻
        [ '4m' ]  //暗刻
    ],
    [
        [ '1m' ], //暗刻
        [ '1p' ], //暗刻
        [ '1s' ], //暗刻
        [ '2m', '3m', '4m' ], //順子
        '4m' //雀頭
    ]
]
```
"m,p,s,z" means "萬子,筒子,索子,字牌"

**Only check true or false:**
```js
//check 一般型
agari.check([
    [3,1,1,1,2,1,1,1,3],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return true

//check7 七対子型
agari.check7([
    [2,0,2,2,2,2,2,0,2],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return true

//check13 国士型
agari.check13([
    [1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,1,1,1,2,1,1,1]
]) //return true

//check all types
agari.checkAll([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]) //return boolean
```
