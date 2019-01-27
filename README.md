# Rusty's Resources - Frontend
The aim of this project is to create a web app that will display all of the student submitted resources, from the #dev-resources channel and potentially other channels on the ZTM Discord server. A Discord bot will be responsible for automatically adding new resources to a database, with the possibility of manually triggering the addition of new resources from other channels.

- [Front-End Repo](https://github.com/zeroDevs/dev-resources-frontend)
- [Front-End URL](https://zerodevs.github.io/dev-resources-frontend/)
- [Back-End Repo (Discord Bot)](https://github.com/zeroDevs/dev-resources-backend)
- [Back-End API URL](https://dev-resources.herokuapp.com/)

# The Web App 
![](https://img.shields.io/badge/TECH%20%20%20-%20%20%20REACT-blue.svg?style=for-the-badge&logo=react)

The web app will be responsible for taking the data from the database via the Bots API and displaying the resources in a visually appealing manner. 

## Features:

#### ▶️ Reddit like voting system
A simple, upvote/downvote or thumbsup/thumbsdown system for resources voting that can be used to display popular resources. 
Perhaps this could be broken down further to show:
- Todays popular resources
- This weeks
- This months
- All time

---

#### ▶️ Resource Bookmarking
A simple system for user to bookmark/favourite resources they like. There should be a page on the users profile page, where the user can organise their bookmarks

---

#### ▶️ Report/Flag Resources
A system users can user to report resources they feel need to be reviewed by an admin/moderator. This process should request a reason the user wishes to report the resource. If a resource get 5 flags it should be hidden from display until its been reviewed. 

---

#### ▶️ Member Profile
A public facing user profile page, showing of the following information:
- User details (Discord name, avatar etc)
- Resource stats (Shared resource total, Bookmarks total, total votes cast etc)
- Book mark list (The user should be able to organise these in some fashion)
- Shared list (This will show all the resource the user has shared with the community)

---

#### ▶️ Moderator Panel
A simple panel, providing a location for the following:
- CRUD operations for the resources
- Review resources that were flagged for review
- Statistics page, A fully comprehensive list of stats for the site
- Category creation, editing and deleting.

---

#### ▶️ Misc features
- Resource tagging/categories, which will allow for a better search system