/*
 * @Copyright https://github.com/takayama-lily/agari
 */
(()=>{
    'use strict'
    const sum = (arr)=>{
        let s = 0
        for (let i = 0; i < arr.length; i++)
            s += arr[i]
        return s
    }
    const check7 = (hai_arr)=>{
        let arr = [...hai_arr[0], ...hai_arr[1], ...hai_arr[2], ...hai_arr[3]]
        let s = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i] != 2) return false
            s += arr[i]
        }
        return s == 14
    }
    const check13 = (hai_arr)=>{
        let arr = [hai_arr[0][0], hai_arr[0][8], hai_arr[1][0], hai_arr[1][8], hai_arr[2][0], hai_arr[2][8], ...hai_arr[3]]
        return !arr.includes(0) && sum(arr) == 14
    }
    const _check = (arr, is_jihai = false)=>{
        arr = [...arr]
        let s = sum(arr)
        if (s === 0)
            return true
        if (s % 3 == 2) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 2)
                    arr[i] -= 2
                else
                    continue
                if (!_check(arr, is_jihai))
                    arr[i] += 2
                else
                    return true
            }
            return false
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                continue
            } else if (arr[i] === 3) {
                delete arr[i]
                continue
            } else {
                if (is_jihai || i >= 7)
                    return false
                if (arr[i] === 4)
                    arr[i] -= 3
                arr[i+1] -= arr[i]
                arr[i+2] -= arr[i]
                if (arr[i+1] < 0 || arr[i+2] < 0)
                    return false
                arr[i] = 0
            }
        }
        return true
    }
    const check = (hai_arr)=>{
        let j = 0
        for (let i = 0; i < hai_arr.length; i++) {
            if (sum(hai_arr[i]) % 3 === 1)
                return false
            j += sum(hai_arr[i]) % 3 === 2
        }
        return j === 1 && _check(hai_arr[3], true) && _check(hai_arr[0]) && _check(hai_arr[1]) && _check(hai_arr[2]) 
    }
    const checkAll = (hai_arr)=>{
        return check7(hai_arr) || check13(hai_arr) || check(hai_arr)
    }

    const MPSZ = ['m','p','s','z']
    const sumAll = (hai_arr)=>{
        let s = 0
        for (let arr of hai_arr)
            s += sum(arr)
        return s
    }
    const findKotsu = (hai_arr)=>{
        let res = []
        for (let i = 0; i < hai_arr.length; i++) {
            for (let ii = 0; ii < hai_arr[i].length; ii++) {
                if (hai_arr[i][ii] >= 3) {
                    hai_arr[i][ii] -= 3
                    if (check(hai_arr)) {
                        res.push([ii+1+MPSZ[i]])
                    } else {
                        hai_arr[i][ii] += 3
                    }
                }
            }
        }
        return res
    }
    const findJyuntsu = (hai_arr)=>{
        let res = []
        for (let i = 0; i < hai_arr.length; i++) {
            if (i === 3)
                break
            for (let ii = 0; ii < hai_arr[i].length; ii++) {
                while (hai_arr[i][ii] >= 1 && hai_arr[i][ii+1] >= 1 && hai_arr[i][ii+2] >= 1) {
                    hai_arr[i][ii]--
                    hai_arr[i][ii+1]--
                    hai_arr[i][ii+2]--
                    if (check(hai_arr)) {
                        res.push([ii+1+MPSZ[i], ii+2+MPSZ[i], ii+3+MPSZ[i]])
                    } else {
                        hai_arr[i][ii]++
                        hai_arr[i][ii+1]++
                        hai_arr[i][ii+2]++
                        break
                    }
                }
            }
        }
        return res
    }
    const findJyanto = (hai_arr)=>{
        for (let i = 0; i < hai_arr.length; i++) {
            for (let ii = 0; ii < hai_arr[i].length; ii++) {
                if (hai_arr[i][ii] >= 2) {
                    return ii+1+MPSZ[i]
                }
            }
        }
    }
    let res = []
    const calc = (hai_arr, j)=> {
        let tmp_hai_arr = [[...hai_arr[0]], [...hai_arr[1]], [...hai_arr[2]], [...hai_arr[3]]]
        let first_res = findKotsu(tmp_hai_arr).concat(j)
        if (sumAll(tmp_hai_arr) === 2) {
            res.push(first_res.sort())
        } else if (first_res.length > 0) {
            first_res = first_res.concat(findJyuntsu(tmp_hai_arr))
            res.push(first_res.sort())
        }
        tmp_hai_arr = [[...hai_arr[0]], [...hai_arr[1]], [...hai_arr[2]], [...hai_arr[3]]]
        let second_res = findJyuntsu(tmp_hai_arr).concat(j)
        if (sumAll(tmp_hai_arr) === 2) {
            res.push(second_res.sort())
        } else {
            second_res = second_res.concat(findKotsu(tmp_hai_arr))
            res.push(second_res.sort())
        }
    }
    const findAllAgariPatterns = (hai_arr)=>{
        hai_arr = [[...hai_arr[0]], [...hai_arr[1]], [...hai_arr[2]], [...hai_arr[3]]]
        res = []
        if (!check(hai_arr)) {
            return res
        }
        if (sumAll(hai_arr) === 2) {
            res.push([findJyanto(hai_arr)])
            return res
        }
        let j
        for (let i = 0; i < hai_arr[3].length; i++) {
            if (hai_arr[3][i] === 0) {
                hai_arr[3][i] += 2
                j = i
                break
            }
        }
        for (let i = 0; i < hai_arr.length; i++) {
            for (let ii = 0; ii < hai_arr[i].length; ii++) {
                if (i === 3 && ii === j)
                    continue
                if (hai_arr[i][ii] >= 2) {
                    hai_arr[i][ii] -= 2
                    if (check(hai_arr))
                        calc(hai_arr, ii+1+MPSZ[i])
                    hai_arr[i][ii] += 2
                }
            }
        }
        let final_res = []
        for (let v of res) {
            let is_duplicate = false
            for (let vv of final_res) {
                if (JSON.stringify(v) === JSON.stringify(vv))
                    is_duplicate = true
            }
            if (!is_duplicate)
                final_res.push(v)
        }
        return final_res
    }

    const exports = findAllAgariPatterns //全和了pattern(一般形限定)
    exports.check = check //一般形
    exports.check7 = check7 //七対子形
    exports.check13 = check13 //国士形
    exports.checkAll = checkAll //全形

    if (typeof module === 'object' && module && module.exports) {
        module.exports = exports
    } 
    else if (typeof define === 'function' && define.amd) {
        define(()=>{
            return exports
        })
    }
    else if (typeof self === 'object' && self) {
        self.agari = exports
    }

})()
