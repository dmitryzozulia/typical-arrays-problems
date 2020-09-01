exports.min = function min(array) {
    if (min.arguments.length === 0) {
        return 0
    }
    let minNumber = Infinity
    for (let i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i]
        }
    }
    return minNumber === Infinity ? 0 : minNumber
}

exports.max = function max(array) {
    if (max.arguments.length === 0) {
        return 0
    }
    let maxNumber = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i]
        }
    }
    return maxNumber === -Infinity ? 0 : maxNumber
}

exports.avg = function avg(array) {
    let sum = 0
    if (avg.arguments.length === 0) {
        return 0
    }
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return isNaN(sum / array.length) ? 0 : sum / array.length
}
