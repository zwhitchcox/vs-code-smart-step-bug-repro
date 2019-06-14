export async function test() {
  await logger()
}

async function logger() {
  return new Promise((res, rej) => {
    console.log('hello')
    res()
  })
}