//ex1
function arr(N) {
    const array = []
    for (i = 0; i < N; i++) {
        array.push(i)
    }
    return array
}

console.log(arr(5))

//ex2
function check(first, second, third) {
    if (first % second === 0 && first % third === 0)
        return true;
    else
        return false;
}

console.log(check(10, 2, 5))
console.log(check(10, 2, 3))
console.log(check(10, 4, 3))

//ex3
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(capitalize('word'))

