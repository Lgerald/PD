/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Matches, Pair} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', userName: 'cody', age: 21, borough: 'Brooklyn', image: "https://fthmb.tqn.com/nkdfSTqlBSF-kWa-0RE9PcmFz7k=/768x0/filters:no_upscale()/feet-face-599c412c22fa3a0011d92add.jpg", password: '123'}),
    User.create({ email: 'murphy@email.com', userName: 'murph', age: 18, borough: 'Manhattan', image: "https://fthmb.tqn.com/-XOWjEiELkzreHYCMjoyrTEEwjU=/768x0/filters:no_upscale()/loan-599c450a03f40200117e717a.jpg", password: '123'}),
    User.create({ email: 'sarah@email.com', userName: 'tadbole', age: 11, borough: 'Bronx', image: "https://previews.123rf.com/images/nomadsoul1/nomadsoul11512/nomadsoul1151200103/49820654-professor-in-glasses-thinking-about-math-formulas.jpg", password: '123' }),
    User.create({ email: 'Leah@email.com', userName: 'Lee', age: 5, borough: 'Manhattan', image: "https://timedotcom.files.wordpress.com/2017/02/170206_badstock_17.jpg", password: '123' }),
    User.create({ email: 'Lemona@email.com', userName: 'blockchain_Babe', borough: 'Long Island', image: "http://agrandeescola.com.br/wp-content/uploads/2017/08/Comunica%C3%A7%C3%A3o_Assertiva.png", age: 30, password: '123' }),
    User.create({ email: 'Bob@email.com', userName: 'Bob', age: 23, borough: 'Brooklyn', image: "https://i.ytimg.com/vi/JfrtU4Wdz9Y/maxresdefault.jpg", password: '123' }),
    User.create({ email: 'alex@email.com', userName: 'alex', age: 45, borough: 'Brooklyn', image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr07/14/7/original-23502-1400067193-9.jpg?downsize=715:*&output-format=auto&output-quality=auto", password: '123' }),
    User.create({ email: 'noah@email.com', userName: 'the_baker', age: 26, borough: 'Bronx', image: "https://i.pinimg.com/736x/33/6e/2e/336e2e91f8bc1fe91c0de80ae6019fb6--photos-tumblr-tumblr-posts.jpg", password: '123' }),
    User.create({ email: 'hannah@email.com', userName: 'turtle_neck', age: 26, borough: 'Brooklyn', image: "https://hookagency.com/wp-content/uploads/2017/07/worst-stock-photos-for-memes.jpg", password: '123' }),
    User.create({ email: 'Julia@email.com', userName: 'baby_Jaspers', age: 23, borough: 'Brooklyn', image: "https://s-i.huffpost.com/gadgets/slideshows/283408/slide_283408_2160763_free.jpg", password: '123' })
  ])
  const matches = await Promise.all([
    Matches.create({ Round: 1, selector: 5, selected: 3}),
    Matches.create({ Round: 1, selector: 2, selected: 4}),
    Matches.create({ Round: 2, selector: 9, selected: 7}),
    Matches.create({ Round: 3, selector: 7, selected: 2}),
    Matches.create({ Round: 3, selector: 10, selected: 5})

  ])

  const pairs = await Promise.all([
    Pair.create({Round: 1, userId: 2, suitor1: 1, suitor2: 3 }),
    Pair.create({Round: 1, userId: 3, suitor1: 10, suitor2: 9 }),
    Pair.create({Round: 2, userId: 2, suitor1: 7, suitor2: 4}),
    Pair.create({Round: 2, userId: 3, suitor1: 8, suitor2: 5 }),
    Pair.create({Round: 3, userId: 2, suitor1: 8, suitor2: 5 })
  ])
  // const messages = await Promise.all([
  //   Messages.create({}),
  //   Messages.create({}),
  //   Messages.create({}),
  //   Messages.create({}),
  //   Messages.create({}),
  //   Messages.create({}),

  // ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${matches.length} matches`)
  console.log(`seeded ${pairs.length} matches`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
