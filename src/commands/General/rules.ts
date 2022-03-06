import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rules',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/no.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `_*----❤️『Bot Rules』❤️----*_\n\n🙂*Don't dm mods asking for the bot script or codes*😌\n*>>>* use #support to get the Official group link in your dm\n*--->*  If you want to chat with Elaina you can use #bot hi *Don't chat in private bot can't chat in Pm\n*--->* How to add the Bot in group? Group should have at least 30 participants If the Group have more than 30 participants then send group link to the owner of the bot *#owner/#mods* \n*--->* Dont use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing internet issue. \n*--->* Don't call the Bot if you do then the Bot will block and ban you \n\n*Enyoy the bot and Have some Fun🥳*   ` }
        )
    }
}
   
