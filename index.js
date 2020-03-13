'use strict'
const assert = require('assert')
const sum = (arr)=>{
    let s = 0
    for (let i in arr)
        s += arr[i]
    return s
}
const check7 = (haiArr)=>{
    let arr = haiArr[0].concat(haiArr[1]).concat(haiArr[2]).concat(haiArr[3])
    let s = 0
    for (let i in arr) {
        if (arr[i] && arr[i] != 2) return false
        s += arr[i]
    }
    return s == 14
}
const check13 = (haiArr)=>{
    let arr = [haiArr[0][0], haiArr[0][8], haiArr[1][0], haiArr[1][8], haiArr[2][0], haiArr[2][8]].concat(haiArr[3])
    return arr.indexOf(0) == -1 && sum(arr) == 14
}
const check = (haiArr)=>{
    const _check = (e, isJihai = false)=>{
        let arr = e.concat()
        if (!sum(arr))
            return true
        if (sum(arr) % 3 == 2) {
            for (let i in arr) {
                if (arr[i] >= 2)
                    arr[i] -= 2
                else
                    continue
                if (!_check(arr, isJihai))
                    arr[i] += 2
                else
                    return true
            }
            return false
        }
        for (let i in arr) {
            if (!arr[i]) {
                continue
            } else if (arr[i] == 3) {
                delete arr[i]
                continue
            } else {
                if (isJihai || i >= 7)
                    return false
                if (arr[i] == 4)
                    arr[i] -= 3
                i = parseInt(i)
                arr[i+1] -= arr[i]
                arr[i+2] -= arr[i]
                if (arr[i+1] < 0 || arr[i+2] < 0)
                    return false
                arr[i] = 0
            }
        }
        return true
    }
    let j = 0
    for (let i in haiArr) {
        if (sum(haiArr[i]) % 3 == 1)
            return false
        j += sum(haiArr[i]) % 3 == 2
    }
    return j == 1 && _check(haiArr[3], true) && _check(haiArr[0]) && _check(haiArr[1]) && _check(haiArr[2]) 
}
const checkAll = (haiArr)=>{
    return check7(haiArr) || check13(haiArr) || check(haiArr)
}
const findAllAgariPatterns = (haiArr)=>{
    const MPSZ = ['m','p','s','z']
    haiArr = JSON.parse(JSON.stringify(haiArr))
    let res = []
    const sumAll = (haiArr)=>{
        let s = 0
        for (let arr of haiArr)
            s += sum(arr)
        return s
    }
    const findKotsu = (haiArr)=>{
        let res = []
        for (let i in haiArr) {
            i = parseInt(i)
            for (let ii in haiArr[i]) {
                ii = parseInt(ii)
                if (haiArr[i][ii] >= 3) {
                    haiArr[i][ii] -= 3
                    if (check(haiArr)) {
                        res.push([ii+1+MPSZ[i]])
                    } else {
                        haiArr[i][ii] += 3
                    }
                }
            }
        }
        return res
    }
    const findJyuntsu = (haiArr)=>{
        let res = []
        for (let i in haiArr) {
            i = parseInt(i)
            if (i === 3)
                break
            for (let ii in haiArr[i]) {
                ii = parseInt(ii)
                while (haiArr[i][ii] >= 1 && haiArr[i][ii+1] >= 1 && haiArr[i][ii+2] >= 1) {
                    haiArr[i][ii]--
                    haiArr[i][ii+1]--
                    haiArr[i][ii+2]--
                    if (check(haiArr)) {
                        res.push([ii+1+MPSZ[i], ii+2+MPSZ[i], ii+3+MPSZ[i]])
                    } else {
                        haiArr[i][ii]++
                        haiArr[i][ii+1]++
                        haiArr[i][ii+2]++
                        break
                    }
                }
            }
        }
        return res
    }
    const findJyanto = (haiArr)=>{
        for (let i in haiArr) {
            i = parseInt(i)
            for (let ii in haiArr[i]) {
                ii = parseInt(ii)
                if (haiArr[i][ii] >= 2) {
                    return ii+1+MPSZ[i]
                }
            }
        }
    }
    const calc = (haiArr, j)=> {
        let tmpHaiArr = JSON.parse(JSON.stringify(haiArr))
        let firstRes = findKotsu(tmpHaiArr).concat(j)
        if (sumAll(tmpHaiArr) === 2) {
            res.push(firstRes.sort())
        } else if (firstRes.length > 0) {
            firstRes = firstRes.concat(findJyuntsu(tmpHaiArr))
            res.push(firstRes.sort())
        }
        tmpHaiArr = JSON.parse(JSON.stringify(haiArr))
        let secondRes = findJyuntsu(tmpHaiArr).concat(j)
        if (sumAll(tmpHaiArr) === 2) {
            res.push(secondRes.sort())
        } else {
            secondRes = secondRes.concat(findKotsu(tmpHaiArr))
            res.push(secondRes.sort())
        }
    }
    if (!check(haiArr)) {
        return res
    }
    if (sumAll(haiArr) === 2) {
        res.push([findJyanto(haiArr)])
        return res
    }
    let j
    for (let i in haiArr[3]) {
        i = parseInt(i)
        if (!haiArr[3][i]) {
            haiArr[3][i] += 2
            j = i
            break
        }
    }
    for (let i in haiArr) {
        i = parseInt(i)
        for (let ii in haiArr[i]) {
            ii = parseInt(ii)
            if (i === 3 && ii === j)
                continue
            if (haiArr[i][ii] >= 2) {
                haiArr[i][ii] -= 2
                if (check(haiArr)) {
                    calc(haiArr, ii+1+MPSZ[i])
                }
                haiArr[i][ii] += 2
            }
        }
    }
    let finalRes = []
    for (let v of res) {
        let isDouble = false
        for (let vv of finalRes) {
            try {
                assert.deepStrictEqual(v, vv)
                isDouble = true
            } catch(e) {}
        }
        if (!isDouble)
            finalRes.push(v)
    }
    return finalRes
}
module.exports = findAllAgariPatterns //一般形限定
module.exports.check = check //一般形
module.exports.check7 = check7 //七対子形
module.exports.check13 = check13 //国士形
module.exports.checkAll = checkAll //全部形
