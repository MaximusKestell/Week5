/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */


// { } object
// [ ] array
// objects can be nested inside other objects, or other arrays
// arrays can be nested inside other arrays or other objects

let iss_location = {  // object
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console. (done)

// let timestamp = iss_location.timestamp
// console.log(timestamp)

let position = iss_location.iss_position
console.log(position)

let latitude = position.latitude
let longitude = position.longitude

console.log(latitude)
console.log(longitude)

let latitudeValue = iss_location.iss_position.latitude
let longitudeValue = iss_location.iss_position.longitude
// TODO Extract the longitude value, and log it to the console. (done)

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// let sudRate = rates['AUD']
// do the math

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787. (done)

//if u can use this syntax it is more concise and more common
// rates.CHF = 1.1787  // option 1

//sometimes this notation is needed
// ex. property name is not a valid javascript variable name
// other reason is when the property name is stored in a variable itself
rates['CHF'] = 1.1787  // option 2

console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD) (done)

let euros = 100
let exchangeRateAUD = rates.AUD
let EqualValueAUD = euros * exchangeRateAUD
console.log(`Equivalent value in Australian Dollars (AUD): ${EqualValueAUD}`)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [ // array
    { name: "Bill Clinton", cat: "Socks" },  // elements of the array are called objects
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" },
    // { name: "Taylor Swift", cat: "Meredith"}
]

let taylorSwiftCat =  { name: 'Taylor Swift', cat: 'Meredith'}

cats_and_owners.push(taylorSwiftCat) // push adds item to array at the end of it
console.log(cats_and_owners) // checking work

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array. (done)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style. (Done)
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis" (done)

cats_and_owners.forEach( function ( catAndOwner){
    // console.log('one cat and owner', catAndOwner)
    let owner = catAndOwner.name
    let cat = catAndOwner.cat
    console.log(`${owner}'s cat is called ${cat}`)
})

// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation (done)
let garyOldmanCat = cats_and_owners[1].cat
console.log("Gary Oldman\'s cat is called " + garyOldmanCat)

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman" (done)
let garyOldmanCatLoop
for (let x=0; x < cats_and_owners.length; x++) {
    if (cats_and_owners[x].name === 'Gary Oldman') {
        garyOldmanCatLoop = cats_and_owners[x].cat
        break
    }
}
console.log('Gary oldman\'s cat is called ' + garyOldmanCatLoop)

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


    let nobel_prize_winners_2017 = {
        "prizes": [
            {
                "year": "2017",
                "category": "physics",
                "laureates": [
                    {
                        "id": "941",
                        "firstname": "Rainer",
                        "surname": "Weiss",
                        "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                        "share": "2"
                    },
                    {
                        "id": "942",
                        "firstname": "Barry C.",
                        "surname": "Barish",
                        "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                        "share": "4"
                    },
                    {
                        "id": "943",
                        "firstname": "Kip S.",
                        "surname": "Thorne",
                        "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                        "share": "4"
                    }
                ]
            },
            {
                "year": "2017",
                "category": "chemistry",
                "laureates": [
                    {
                        "id": "944",
                        "firstname": "Jacques",
                        "surname": "Dubochet",
                        "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                        "share": "3"
                    },
                    {
                        "id": "945",
                        "firstname": "Joachim",
                        "surname": "Frank",
                        "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                        "share": "3"
                    },
                    {
                        "id": "946",
                        "firstname": "Richard",
                        "surname": "Henderson",
                        "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                        "share": "3"
                    }
                ]
            },
            {
                "year": "2017",
                "category": "medicine",
                "laureates": [
                    {
                        "id": "938",
                        "firstname": "Jeffrey C.",
                        "surname": "Hall",
                        "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                        "share": "3"
                    },
                    {
                        "id": "939",
                        "firstname": "Michael",
                        "surname": "Rosbash",
                        "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                        "share": "3"
                    },
                    {
                        "id": "940",
                        "firstname": "Michael W.",
                        "surname": "Young",
                        "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                        "share": "3"
                    }
                ]
            },
            {
                "year": "2017",
                "category": "literature",
                "laureates": [
                    {
                        "id": "947",
                        "firstname": "Kazuo",
                        "surname": "Ishiguro",
                        "motivation": "\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                        "share": "1"
                    }
                ]
            },
            {
                "year": "2017",
                "category": "peace",
                "laureates": [
                    {
                        "id": "948",
                        "firstname": "International Campaign to Abolish Nuclear Weapons (ICAN)",
                        "motivation": "\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                        "share": "1",
                        "surname": ""
                    }
                ]
            },
            {
                "year": "2017",
                "category": "economics",
                "laureates": [
                    {
                        "id": "949",
                        "firstname": "Richard H.",
                        "surname": "Thaler",
                        "motivation": "\"for his contributions to behavioural economics\"",
                        "share": "1"
                    }
                ]
            }
        ]
    }
// TODO print the full name of the Literature Nobel laureate. (done)
let literatureLaureate = nobel_prize_winners_2017.prizes.find(prize => prize.category === 'literature').laureates[0];
console.log(`Literature Nobel laureate: ${literatureLaureate.firstname} ${literatureLaureate.surname}`);

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed. (done)
let physicsLaureates = nobel_prize_winners_2017.prizes.find(prize => prize.category === 'physics').laureates
physicsLaureates.forEach(laureate => {
    console.log(`Physics Nobel laureate id : ${laureate.id}`)
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ). (done)
let prizeCategories = []
for (let x = 0; x < nobel_prize_winners_2017.prizes.length; x++) {
    prizeCategories.push(nobel_prize_winners_2017.prizes[x].category)
}
console.log(`Prize categories: ${prizeCategories.join(', ')}`)
// TODO write code to print the total number of prize categories (done)
let totalPrizeCategories = 0
for (let x=0; x < nobel_prize_winners_2017.prizes.length; x++){
    totalPrizeCategories++
}
console.log(`Total number of prize categories: ${totalPrizeCategories}`)

// TODO write code to count the total number of laureates from 2017. (done)
//  have a good look at how the JSON is structured, and think about what loop(s) you'll need to write. (done)
let totalLaureates = nobel_prize_winners_2017.prizes.reduce((total, prize) => total + prize.laureates.length, 0)
console.log(`Total number of laureates from 2017: ${totalLaureates}`)

