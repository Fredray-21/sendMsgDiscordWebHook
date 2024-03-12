# message-anonyme-discord

Cette application permet d'envoyer un message anonymement sur un serveur Discord.

Pour l'utiliser, vous devez l'héberger chez vous. Pour cela, installez Node.js, puis installez les modules en tapant :
```batch
npm i
```
Dans le répertoire **config/**, il faut créer un fichier **config.json** en prenant exemple sur **config_sample.json** et écrire les arguments demandés :
```json
{
  "pfp": "URL PROFILE PICTURE",
  "username": "USERNAME"
}
```

Enfin, pour envoyer un message, il suffit de faire :
```batch
node server.js url <URL_WEBHOOK> "VOTRE MESSAGE"
```
