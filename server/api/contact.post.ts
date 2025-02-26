import TelegramBot from 'node-telegram-bot-api';

// Simple safe string function to avoid telegram markdown issues
export const safeStr = (str: string) => str.replace(/[^a-zA-ZÀ-ÿ0-9\-_@\. \n]/g, '');

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS?.split(' ') ?? [];

  if (!token || !chatIds.length) return {};

  const bot = new TelegramBot(token, { polling: false });

  let msg = '🎆🎊 *Nouveau message de contact* 🎊🎆\n\n';
  msg += `🙈 *Name ⤵️*\n${safeStr(name)}\n\n`;
  msg += `📧 *Email ⤵️*\n${safeStr(email)}\n\n`;
  msg += `🗨️ *Message ⤵️*\n${safeStr(message)}\n`;

  chatIds.forEach(chatId => {
    bot.sendMessage(chatId, msg, {
        parse_mode: 'Markdown',
    });
  });

  return {};
});