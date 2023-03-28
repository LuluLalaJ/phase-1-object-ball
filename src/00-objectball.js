function gameObject() {
    const gameObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors:["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        }, 
        away: {
            teamName: "Charlotte Hornets",
            colors:["Turquois", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,

                },
                "DeSagna Dioprook Lopez": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },

    }
    return gameObj
}

// console.log(gameObject())

//Below are functions
function getAllPlayers() {
    //not dynamic? 
    let game = gameObject()
    let awayPlayers = game.away.players
    let homePlayers = game.home.players
    let allPlayers = {...awayPlayers, ...homePlayers}
    return allPlayers
}

function getPlayerObject(name) {
    let game = gameObject(); 
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let playerData = teamObj.players;
        for (let key in playerData) {
            if (key === name) {
                return playerData[name]
            } 
        }
    } return 'Player not found!'
}

function getTeamOBject(teamName) {
    let game = gameObject(); 
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === teamName) {
            return teamObj
        }
    } return 'Team not found!'
}

function numPointsScored(name) {
    let player = getPlayerObject(name);
    if (player !== 'Player not found!') {
        return `${name} scored ${player.points} points!`
    }
    return player
}

function shoeSize(name) {
    let player = getPlayerObject(name);
    if (player !== 'Player not found!') {
        return `${name}'s shoe size is ${player.shoe}!`
    }
    return player
}

function teamColors(teamName) {
    let team = getTeamOBject(teamName); 
    if (team !== 'Team not found!') {
        return team.colors;
    }
    return team
}

function teamNames() {
    let game = gameObject();
    let teamNames = []
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        teamNames.push(teamObj.teamName)
    }

    return teamNames
}

function playerNumbers(teamName) {
    let team = getTeamOBject(teamName); 
    let jerseyNumbers = [];
    if (team !== 'Team not found!') {
        let playerData = team.players;
        for (let player in playerData) {
            console.log('player is ', player);
            let playerNumber = playerData[player].number
            jerseyNumbers.push(playerNumber)
        }
        return jerseyNumbers
    }
    return team
}

function playerStats(name) {
    return getPlayerObject(name)
}

function bigShoeRebounds() {
    let bigShoePlayer = largestShoeSize().player;
    let bigShoe = largestShoeSize().shoe
    let bigShoeRebound = playerRebounds(bigShoePlayer)
    return `${bigShoePlayer}, with the largest shoe size of ${bigShoe}, has ${bigShoeRebound} rebounds`
    
}

function playerRebounds(name) {
    let player = getPlayerObject(name) 
    if (player !== 'Player not found!') {
            return player.rebounds
        }
    return player
}

function largestShoeSize() {
    let allPlayers = getAllPlayers();
    let shoeMax = 1; 
    let shoeMaxPlayer = "";
    for (let player in allPlayers) {
        if (allPlayers[player].shoe >= shoeMax) {
            shoeMax = allPlayers[player].shoe
            shoeMaxPlayer = player
        } 
    }
    return {player: shoeMaxPlayer,
            shoe: shoeMax}
}

function mostPointsScored() {
    let allPlayers = getAllPlayers();
    let pointMax = 1;
    let pointMaxPlayer = "";
    for (let player in allPlayers) {
        if (allPlayers[player].points >= pointMax) {
            pointMax = allPlayers[player].points
            pointMaxPlayer = player
        } 
    }
    return {player: pointMaxPlayer,
            points: pointMax}
}

function teamPointsTotal(teamName) {
    let team = getTeamOBject(teamName); 
    if (team !== 'Team not found!') {
        let playerData = team.players;
        let totalPoints = 0;
        for (player in playerData) {
            let points = playerData[player].points;
            totalPoints += points
        }
        return totalPoints
    }
    return team
}

function winningTeam() {
    let game = gameObject()
    let homeTeam = game.home.teamName;
    let awayTeam = game.away.teamName;
    let homeTeamPoints = teamPointsTotal(homeTeam);
    let awayTeamPoints = teamPointsTotal(awayTeam);
    if (homeTeamPoints > awayTeamPoints) {
        return `${homeTeam} wins the game with ${homeTeamPoints}!`
    } else if (homeTeamPoints === awayTeamPoints) {
        return `${homeTeam} and ${awayTeam} are tied with ${homeTeamPoints} points!`
    } else {
        return `${awayTeam} wins the game with ${awayTeamPoints}!`
    }
}
// console.log(playerStats("Bismak Biyombo"))

function playerWithLongestName() {
    let allPlayers = getAllPlayers();
    let nameMaxLength = 1;
    let playerName = "";
    for (let player in allPlayers) {
       if (player.length > nameMaxLength) {
        nameMaxLength = player.length
        playerName = player; 
       }
    }
    return `${playerName} has the longest name`
}

console.log( playerWithLongestName() )

