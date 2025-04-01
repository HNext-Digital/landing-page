export default defineEventHandler(async (event) => {
  const { discordContactWebhookUrl } = useRuntimeConfig(event)
  const body = await readBody(event)

  let messageForDiscord = ''
  messageForDiscord += `# New contact form submission:\n`
  messageForDiscord += `> **Name:** ${body.name}\n`
  messageForDiscord += `> **Email:** ${body.email}\n`
  messageForDiscord += `> **Message:**\n> ${body.message}`

  // Send webhook to Discord
  if (discordContactWebhookUrl) {
    try {
      await $fetch(discordContactWebhookUrl, {
        method: 'POST',
        body: {
          content: messageForDiscord,
        },
      })
    }
    catch (err) {
      console.error('Error sending message to Discord webhook', err)
    }
  }
  else {
    console.error('No Discord webhook URL provided in runtime config.', JSON.stringify(discordContactWebhookUrl))
  }

  // Ignore all errors if any
  return { message: 'Data received successfully' }
})
