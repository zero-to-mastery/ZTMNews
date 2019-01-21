# Developer-Resources

The aim of this project is to create a web app that will display all of the student submitted resources, from the #dev-resources channel and potentially other channels on the ZTM Discord server. A Discord bot will be responsible for automatically adding new resources to a database, with the possibility of manually triggering the addition of new resources from other channels.

## The Discord Bot - ([Bot's Repo](https://github.com/zeroDevs/devRes-Bot))
![](https://img.shields.io/badge/Language-Javascript-yellow.svg?style=for-the-badge&logo=javascript)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![](https://img.shields.io/badge/module-discord.js-orange.svg?style=for-the-badge&logo=discord)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![](https://img.shields.io/badge/module-discord--passport-red.svg?style=for-the-badge&logo=npm)

Initially the bot will be a standalone bot, with the intention to eventually merged it into the new version of zeroBot when it is ready to go live. This will ensure we can deploy the bot as soon as its ready, rather than waiting for the dev version of zeroBot to be ready. This bots code should also be alot simpler, allowing people with little bot experience to contribute. 

The resources bot will be responsible for:
- Detecting new unique links in #dev-resorces and add them to the database
- Return an embed with details of the submission, to show it was successful
- If successfully added to the DB, the users initial message with links should be deleted. Likewise any other user message not containing links should be deleted. (This should keep #dev-resources clean, with only the embeds the bot posts to show it was successful.)
- Detect a specific emoji on a post with a unique link, which will trigger the manual inclusion of the link to the database. The confirmation this was successful, should be returned in #dev-resources, but should leave the original message alone.
- Include an API for the front-end

## The Web App 
![](https://img.shields.io/badge/TECH%20%20%20-%20%20%20REACT-blue.svg?style=for-the-badge&logo=react)

The web app will be responsible for taking the data from the database via the Bots API and displaying it in a visually appealing manner. 

### Features:
- Reddit like upvoting/downvoting
- Resource bookmarking, allowing users to favourite resources they like
- Report/Flag Resources
- Admin panel for editing/deleteing resources, along with adding/updating the resouce's category
