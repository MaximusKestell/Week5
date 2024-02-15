function cityStateAddress(city, state) {
    let address = city + ', ' + state.toUpperCase() // mn -> MN
    // let address = '${city}, ${state.toUpperCase()}  This is another way to do the line above it.
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)

function isMinnesotaZip(code) {
    // all MN zip are between these: 55801 and 56763
    if (code >= 55001 && code<= 56763) {
        return true
    } else {
        return false
    }
}

console.log(validGPA('5'))
console.log(validGPA(3))

console.log(isMinnesotaZip('55403')) // can be string or value
console.log(isMinnesotaZip('55001'))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip('9999999999999'))
console.log(isMinnesotaZip(-1))

function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}
// Below is another method of doing the same function as above.
// function validGPA(gpa) {
//     return gpa >= 0 && gpa <= 4
// }



