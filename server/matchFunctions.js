const { Matches, Pair } = require('./db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


//creates a new match
function addPersonToMatches(me, you, Round = 1){
    //we need a before create check for pairs sort of thing
    Matches.create({me, you})
    .then(newMatch => {
        console.log("???", newMatch)
        checkForPairs(newMatch)
    })
    .catch(err => console.error(err))
}


//loops through matches, and checks if theres one that matches (selector and round). if true --> generate a pair
// i think its matching itself?
//yep. its definetly matching itself, this needs to happen (or just be checked before creating the pair)
function checkForPairs(createdMatch){
    Matches.findOne({
      where: {
        you: createdMatch.you,
        Round: createdMatch.Round
      }
    })
    .then(foundMatch => {
        if (foundMatch) {
            foundMatch.update({inPair: true})
            createdMatch.update({inPair: true})
            createPair(foundMatch.you, createdMatch.you, createdMatch.Round, createdMatch.me)
        } else {
            console.log("nothing matches!")
        }
    })
    .catch(err => console.error(err))
}
    //need to find one but also check for ourselves in their matches at the same roundd
    // leave peeple in the matches - only updating their round or removing them
    // on reject - need to remove from matches and from the pairs (but, if we've already produced a pair, leave an "impotent pair" up for user continuity)
    // add  bool to match schema to mark a match for destructions (on my rejection search through my matches for the person who just rejected me) and alter that bool

//Once a new pair has been generated (or removed?), we need to update the hasbeenrejected bool
//BUT WHEN:
// when another person presses the button, (but not for them - so it would happen on a onsubmit?)
function downgradeMatch(me, you) {
    Matches.findOne({
        where: {me, you}
    })
    .then(downgrade => {
        downgrade.hasBeenRejected = true
        res.json(downgrade)
    })
    .catch(err => console.error(err))
}

function removePairStatus(me, you) {
    Matches.findOne({
      where:
        {
            me,
            you,
            hasBeenRejected: true,
            inPair: true
        }
    })
      .then(remove => {
        remove.inPair = false
        return remove
      })
      .catch(err => console.error(err))
}

//if a persons rejected bool is true, and their not in a pair (for the user)
//so do we need to add an isInAPairBool??
function clearUselessMatch(me) {
    Matches.destroy({where:
        {
            [Op.and]: [{me}, {hasBeenRejected: true}, {inPair: false}]
        }
    })
    .then(rejects => console.log(rejects))
    .catch(err => console.error(err))
}

function createPair(suitor2, suitor1, Round, userId){
    Pair.create({Round, userId, suitor1, suitor2})
    .then(createdPair => {
        console.log(createdPair)
    })
    .catch(err => console.error(err))
}

//find all the matches that have been reject and are not in a pair, and remove all
function removePair(me) {
    Matches.findAll({
        where: {
            me,
            inPair: false,
            hasBeenRejected: true
        }
    })
    .then(rejects => {
        Pair.destroy({where:
            {
                [Op.or]: [{suitor1: rejects.me}, {suitor2: rejects.you}]
            }
        })

    })
}

module.exports = {
    addPersonToMatches,
    checkForPairs,
    downgradeMatch,
    removePairStatus,
    removePair,
    clearUselessMatch,
    createPair
}
