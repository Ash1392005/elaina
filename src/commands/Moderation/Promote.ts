import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'promote',
            description: 'promotes the mentioned users',
            category: 'moderation',
            usage: `${client.config.prefix}promote [@mention | tag]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
					return void M.reply(
						`𝕙𝕒𝕙𝕒𝕙𝕒𝕙𝕒 𝕛𝕖𝕣𝕜 𝕞𝕒𝕜𝕖 𝕞𝕖 𝕒𝕕𝕞𝕚𝕟 𝕗𝕚𝕣𝕤𝕥 𝕚 𝕒𝕞 𝕟𝕠𝕥 𝕪𝕠𝕦𝕣 𝕞𝕠𝕞 𝕨𝕙𝕠 𝕔𝕒𝕟 𝕕𝕠 𝕖𝕧𝕖𝕣𝕪𝕥𝕙𝕚𝕟𝕘`
					);
				if (M.quoted?.sender) M.mentioned.push(M.quoted.sender);
				if (!M.mentioned.length)
					return void M.reply(
						`ℍ𝕠𝕨 𝕤𝕙𝕠𝕦𝕝𝕕 𝕚 𝕜𝕟𝕠𝕨 𝕨𝕙𝕠𝕞 𝕦 𝕨𝕒𝕟𝕥 𝕥𝕠 𝕡𝕣𝕠𝕞𝕠𝕥𝕖? 𝕒𝕟𝕥𝕒𝕣𝕪𝕒𝕞𝕚 𝕙𝕦 𝕜𝕪𝕒 𝕓𝕤𝕕𝕜 ${this.config.command}`
					);
        M.mentioned.forEach(async (user) => {
            const usr = this.client.contacts[user]
            const username = usr.notify || usr.vname || usr.name || user.split('@')[0]
            if (M.groupMetadata?.admins?.includes(user)) M.reply(`✖ Skipped *${username}* as they're already an admin`)
            else {
                await this.client.groupMakeAdmin(M.from, [user])
                M.reply(`👑 𝕓𝕙𝕒𝕚 𝕡𝕒𝕣𝕥𝕪? 𝕚 𝕝𝕠𝕧𝕖 𝕪𝕠𝕦𝕣 𝕤𝕚𝕟 𝕚 𝕡𝕣𝕠𝕞𝕠𝕥𝕖 𝕪𝕠𝕦 𝕟𝕠𝕨 𝕗𝕦𝕜 𝕖𝕞 𝕒𝕝𝕝 *${username}*`)
            }
        })
    }
}
