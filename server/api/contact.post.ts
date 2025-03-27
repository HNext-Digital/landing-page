export default defineEventHandler(async (event) => {
  const { discordContactWebhookUrl } = useRuntimeConfig()
  const body = await readBody(event)

  let messageForDiscord = ''
  messageForDiscord += `# New contact form submission:\n`
  messageForDiscord += `> **Name:** ${body.name}\n`
  messageForDiscord += `> **Email:** ${body.email}\n`
  messageForDiscord += `> **Message:**\n> ${body.message}`

  // Send webhook to Discord
  if (discordContactWebhookUrl) {
    fetch(discordContactWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: messageForDiscord,
      }),
    }).catch((err) => {
      console.error('Error sending message to Discord webhook', err)
    })
  }
  else {
    console.error('No Discord webhook URL provided in runtime config.')
  }

  return { message: 'Data received successfully' }
})
