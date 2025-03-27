export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Received data:', body)
  return { message: 'Data received successfully' }
})
