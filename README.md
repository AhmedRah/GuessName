<!-- Projet realiser par RAHMOUNI AHmed & EL ANDALOUSSI Ayoub -->

Instructions :

Pour preparer l'environment pour lec e projet , vous pouvez installer tout les packages utiliser 
avec le gestionnaire de packages NPM :
1- Placer vous dans la repertoire du projet 
2- Lancer la commande suivante :
    sudo npm install
3- Apres l'installation , vous pouvez demarer le serveur avec la commande :
  node server.js
4- La base de donnees est heberger sur le service cloud de mongoDB (atlas),est appeller dans le ficher db.js dans la repertoire controller.
5- Voici le lien directe de la BD , il est aussi accessible par n'importe quelle Adresse IP soit par le programme MongoDB Compass soit par le le shell MongoDB :
  - Par shell :
    mongo "mongodb+srv://cluster0.ivdg6.mongodb.net/projet-web" --dbuser admin
  - Par MongoDB Compass :
    mongodb+srv://dbuser:dbpassword@cluster0.ivdg6.mongodb.net/test

Si vous arrivez pas a installer tout les packages precedents , veuiller consulter le fichier package.json pour les trouver manuellement.

*** Mon Setup for the data base : ***
Using WSL ubunto v 18.04 (Windows SubSystem For Linux v2)
Node Latest versin 14.15.3
NPM package manager Latest v 6.14.9
MangoDB latest version v4.4.2
ODM : Mongoose
<!-- Turbo CLI v0.39.5 -->


Notes : 
sudo npm install express-validator body-parser bcryptjs jsonwebtoken --save


REST & CRUD : 

*** CRUD for comments : ***

Index  :  GET    /comments          - Display all comments
Show   :  GET    /comments/:id      - get one comment (using its id)
Create :  POST   /comments          - Create a new comment 
Update :  PATCH  /comments/:id      - update a specific comment (using its id)
Edit   :  GET    /comments/:id/edit - form to edit specific comment
Destroy:  DELETE /comments/:id      - Delete one comment (using its id)

*** CRUD for articles : ***

Index  :  GET    /articles          - Display all comments
Show   :  GET    /articles/:id      - get one article (using its id)
Create :  POST   /articles          - Create a new article 
Update :  PATCH  /articles/:id      - update a specific article (using its id)
Edit   :  GET    /articles/:id/edit - form to edit specific article
Destroy:  DELETE /articles/:id      - Delete one article (using its id)


