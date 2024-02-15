let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

// for each loop is more concise, will see more often.
birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called once by each object in array.
    console.log(bird.toUpperCase())
})

// traditional for loop
for ( let x = 0 ; x < birds.length ; x = x+1) { // can use x++ as a shortcut for x = x+1
    let bird = birds[x]
    console.log(bird.toUpperCase())
}