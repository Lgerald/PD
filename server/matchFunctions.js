const { Matches, Pair } = require('./db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function addPersonToMatches(selector, selected, Round = 1){
    Matches.create({ selector, selected, Round })
    .then(newMatch => {
        console.log("new made match", newMatch)
        checkForPairs(newMatch)
    })
    .catch(err => console.error(err))
}

function checkForPairs(createdMatch){
    //need to find one but also check for ourselves in their matches at the same roundd
    // leave peeple in the matches - only updating their round or removing them
    // on reject - need to remove from matches and from the pairs (but, if we've already produced a pair, leave an "impotent pair" up for user continuity)
    // add  bool to match schema to mark a match for destructions (on my rejection search through my matches for the person who just rejected me) and alter that bool
    Matches.findOne({
        where: {
            selector: createdMatch.selector,
            Round: createdMatch.Round
        }
    })
    .then(foundMatch => {
        if (foundMatch){
            createPair(foundMatch.selected, createdMatch.selected, createdMatch.Round, createdMatch.selector)
        }
    })
}

function createPair(suitor2, suitor1, Round, userId){
    Pair.create({Round, userId, suitor1, suitor2 })
    .then(createdPair => {
        console.log("new pair made", createdPair)
        //after this pt destroy the two matches
        //Matches.destroy({
            // where: {
            //     selector: userId,
            //     Round: Round
             //    [Op.or]: [{selected: suitor1}, {selected: suitor2}] 
            // }
        // })
    })
    .catch(err => console.error(err))
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