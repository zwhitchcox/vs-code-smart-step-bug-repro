;(async function() {
  await logger()
})()

async function logger() {
  return new Promise((res, rej) => {
    console.log('hello')
    res()
  })
}