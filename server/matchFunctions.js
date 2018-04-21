const { Matches, Pair } = require('./db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


//creates a new match
function addPersonToMatches(selector, selected, Round = 1){
    Matches.create({ selector, selected, Round })
    .then(newMatch => {
        checkForPairs(newMatch)
    })
    .catch(err => console.error(err))
}


//loops through matches, and checks if theres one that matches (selector and round). if true --> generate a pair
function checkForPairs(createdMatch){
    Matches.findOne({
      where: {
        selector: createdMatch.selector,
        Round: createdMatch.Round
      }
    })
      .then(foundMatch => {
        if (foundMatch) {
            foundMatch.inPair = true
            createPair(foundMatch.selected, createdMatch.selected, createdMatch.Round, createdMatch.selector)
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
        return downgrade
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
    Pair.create({Round, userId, suitor1, suitor2 })
    .then(createdPair => {
        console.log("new pair made", createdPair)
    })
    .catch(err => console.error(err))
}

function removePair(selected) {
    Matches.findAll({
        where: {
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

addPersonToMatches(2, 5)

// //POST: a match
// router.post('/:user/:suitor', (req, res, next) => {
//     const { user, suitor } = req.params
//     Matches.create({ user, suitor })
//     .then(newMatch => res.json(newMatch))
//     .catch(next)
// })



//add a new unpaired match to the pool of potential match-pairs


    //look through all the matches where selectedId != createdMatch.selectedId
    //AND selectorId == createdMatch.selectorId
    //AND the round number == createdMatch.Round
    //if found createPair(foundMatch.id, createdMatch.id, createdMatch.Round, createdMatch.selectorId)