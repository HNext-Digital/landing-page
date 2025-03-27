export default defineEventHandler(async (event) => {
  const { discordContactWebhookUrl } = useRuntimeConfig()
  const body = await readBody(event)

  let messageForDiscord = ''
  messageForDiscord += `# New contact form submission:\n`
  messageForDiscord += `> **Name:** ${body.name}\n`
  messageForDiscord += `> **Email:** ${body.email}\n`
  messageForDiscord += `> **Message:**\n> ${body.message}`

  // Send webhook to Discord
  fetch(discordContactWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: messageForDiscord,
    }),
  }).catch(() => {}) // Ignore errors

  return { message: 'Data received successfully' }
})
