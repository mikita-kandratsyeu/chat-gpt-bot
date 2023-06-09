import { getGPTAnswer } from '@bot/helpers';
import { inlineShareWithContacts } from '@bot/keyboards';
import { logger } from '@bot/services';
import { BotType } from '@bot/types';

export const textCommand = (bot: BotType) => {
  bot.on('message:text', async (ctx) => {
    try {
      const messageId = Number(ctx?.message?.message_id);
      const text = String(ctx?.message?.text);

      const gptAnswer = (await getGPTAnswer(ctx, text)) ?? '';

      await ctx.reply(gptAnswer, {
        reply_to_message_id: messageId,
        reply_markup: inlineShareWithContacts(ctx, gptAnswer),
      });
    } catch (error) {
      await ctx.reply(ctx.t('error-message-common'));

      logger.error(`controller::textController::${JSON.stringify(error.message)}`);
    }
  });
};
