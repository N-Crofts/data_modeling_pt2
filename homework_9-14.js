////////////////////////////////////////////////////////////////////////////////////////////////////


1. ULTRA EMAIL APP

A user has:                                 An email has:
    - id number                                     - id number
    - name/login                                    - an individual address                                        
    - password                                      - an individual password
    - various emails addresses                      - contacts
    
    

const user = {                              const email = {
    id: Number,                                     id: Number,
    name: String,                                   address: String, 
    password: String,                               password: String,
    emails: []                                      contacts: []
}                                           }
                                            

const exampleUser = {
    id: 222,
    name: "John Doe",
    password: JohndoeRulez4Life,
    emails: [{
        id: 1,
        address: "jonnydoe@gmail.com",
        password: "tacos11",
        contacts: []
    }, 
    {
        id: 2,
        address: "retrojohnny@hotmail.com",
        password: "90sKid",
        contacts: []
    }]
}

////////////////////////////////////////////////////////////////////////////////////////////////////


2. RADIO ON THE INTERNET APP

A user has:                                 An radio station has:
    - id number                                     - id number
    - name                                          - genre                                         
    - password                                      - artist lists
    - station playlists                             - song lists
                                                    - subscriber list
    
    

const user = {                              const radioStation = {
    id: Number,                                     id: Number,
    name: String,                                   genre: String, 
    passWord: String,                               artists: [],
    radioStations: []                               songs: [],
                                                    subscribers: []
}                                           }


const exampleUser = {
    id: 222,
    name: "Jane Doe",
    passWord: "stuffandthings",
    radioStations: [{
        id: 333,
        genre: "Pop",
        artists: [{
            id: 111,
            genre: "Pop",
            name: "Pop and the Popstars",
            songs: [{
                id: 555,
                name: "Yeah, Yeah, Yeah"
            },
            {
                id: 556,
                name: "Party, Party, Yeah"
            }]
        }]
    }]
}

////////////////////////////////////////////////////////////////////////////////////////////////////


3. ROCK CONCERT APP


A user has:                                 Each band has:
    - id number                                     - id number
    - name                                          - genre                                         
    - password                                      - tour dates
    - location                                      - tour venues
    - favorite bands                                - similiar artists
    - order history                                 
    - recommendations
    

const user = {                              const band = {
    id: Number,                                     id: Number,
    name: String,                                   genre: String, 
    passWord: String,                               name: String,
    location: String,                               upcomingTours: [],
    favoriteBands: [],                              similarArtists: []
    orderHistory: [],                               
    recommendations: []
                                                    
}                                           }


const exampleUser = {
    id: 222,
    name: "Nick",
    password: "hahaPasswyrds",
    location: "Atlanta",
    favoriteBands: [{
        id: 666,
        name: "Iron Maiden",
        genre: "80s Metal",
        upcomingTour: [{
            tourOne: [{
                dateOne: "10-31-18",
                venueOne: "Madison Square Garden - New York"
            }],
            tourTwo: [{
                dateTwo: "12-31-18",
                venueTwo: "The Fox Theater - Atlanta"
            }]
        }],
        similarArtists: [{
            artistOne: [{
                id: 777,
                name: "Judas Priest"
            }],
            artistTwo: [{
                id: 888,
                name: "Dio"
            }]
        }]
        
    }],
    orderHistory: [{
        orderOne: [{
            transactionNumber: 214241,
            date: "8-2-18",
            bandName: "Black Sabbath",
            venue: "The Masquerade"
        }]
    }],
    recommendedBands: [{
        bandOne: "Judas Priest",
        bandTwo: "Dio"
    }]
}

////////////////////////////////////////////////////////////////////////////////////////////////////


4. COFFEE TO-GO APP


A user has:                                 Each order has:
    - id number                                     - id number
    - name                                          - date ordered                                         
    - password                                      - cafe name
    - current location                              - cafe location
    - nearby coffee shops                           - cafe items
    - shopping cart                                 - order total
    - order history                                 

    

const user = {                              const order = {
    id: Number,                                     id: Number,
    name: String,                                   orderDate: String 
    passWord: String,                               cafeName: String,
    curentLocation: String,                         cafeLocation: String,
    nearbyCoffee: [],                               cafeItems: [],
    shoppingCart: [],                               orderTotal: Number
    orderHistory: []                               
                                                    
}                                           }


const exampleUser = {
    id: 222,
    name: "Nick",
    passWord: "coffeeIsLyfe",
    currentLocation: "West Midtown, Atl, GA",
    nearbyCoffee: [{
        cafeOne: "Starbucks",
        cafeTwo: "The Octane",
        cafeThree: "Hipster Lipsum"
    }],
    shoppingCart: [{
        cafe: "The Octane",
        item: "Iced Vanilla Latte"
    }],
    orderHistory: [{
        orderOne: [{
            id: 333,
            orderDate: "2-22-18",
            cafeName: "Starbucks",
            cafeLocation: "West Midtown, Atl, GA",
            cafeItems: "Grande Cappuccino",
            orderTotal: 5.99
        }]
    }]
}

////////////////////////////////////////////////////////////////////////////////////////////////////


5. TEAM TRACKER APP


A user has:                                 Each team has:
    - id number                                     - id number
    - name                                          - sport                                         
    - password                                      - team name
    - favorite teams                                - team roster
    - upcoming games                                - team schedule
    

const user = {                              const team = {
    id: Number,                                     id: Number,
    name: String,                                   sport: String, 
    passWord: String,                               teamName: String,
    favTems: [],                                    teamRoster: [],
    upcomingGames: []                               teamSchedule: []
                                                    
}                                           }


const exampleUser = {
    id: 222,
    name: "Johnny Quarterback",
    password: "pigSkin4Lyfe",
    favTeams: [{
        favTeamOne: [{
            id: 999,
            sport: "College Football",
            teamName: "The Punishing Poindexters",
            teamRoster: [{
                playerOne: "John Doe",
                playerTwo: "etc.",
                playerThree: "etc.",
                playerFour: "etc."
            }],
            teamShedule: [{
                gameOne: "9-25-18, Poindexter Arena",
                gameTwo: "10-01-18, The Octagon"
            }]
        }]
    }],
    upcomingGames: [{
        gameOne: "9-25-18, Poindexter Arena",
        gameTwo: "10-01-18, The Octagon"
    }]
}


////////////////////////////////////////////////////////////////////////////////////////////////////


FINAL THOUGHTS

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

A. I had to stop and consider the info required for each array of objects, and the importance of detailed info needed to properly navigate each callback.