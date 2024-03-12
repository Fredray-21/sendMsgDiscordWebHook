const { Webhook, MessageBuilder  } = require('discord-webhook-node')
const config_file = require('./config/config.json')

let url_webhook = undefined;
const arg = process.argv.slice(2);

if (arg[0] === undefined) {
    console.log("Vous n'avez pas mis de message !")
}

if (arg[0] === "url") {
    url_webhook = arg[1];
    if (url_webhook === undefined) return console.log("Vous n'avez pas mis d'url !");
    sendMSG(arg[2]);
}

function sendMSG(msg) {
    const pfp = config_file.pfp
    const username = config_file.username
    const hook = new Webhook(url_webhook);
    hook.setUsername(username);
    hook.setAvatar(pfp);
    hook.send(msg).then(() => {
        console.log("Votre message a bien été envoyé !");
    }).catch((err) => {
        console.log("Une erreur est survenue : " + err);
    });
}
