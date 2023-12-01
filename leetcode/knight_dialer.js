/**
 * @param {number} n
 * @return {number}
 */

var _kd = function(n, k, map) {
    // console.log(`n: ${n}, k: ${k}`);
    if (n <= 1) {
        // console.log(`res=${map[k].length}`)
        return map[k].length;
    }
    let acc = 0;
    map[k].forEach((curr) => {
        acc += _kd(n - 1, curr, map);
    });
    return acc;
}

var knightDialer = function(n) {
    const map = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        6: [1, 7, 0],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    };
    if (n == 1) {
        return 10;
    }
    // const res = Object.keys(map).reduce((acc, k) => {return acc + _kd(n - 1, parseInt(k), map), 0})
    // console.log(`result = ${res}`)
    // return Object.keys(map).reduce((acc, k) => {return acc + _kd(n - 1, parseInt(k), map), 0});
    let acc = 0;
    Object.keys(map).forEach((key) => {
        acc += _kd(n-1, parseInt(key), map);
    });
    // console.log(`result = ${acc}`)
    return acc;
};

console.log(knightDialer(4))
console.log(knightDialer(5))
console.log(knightDialer(6))
// console.log(knightDialer(30))
