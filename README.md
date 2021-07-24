# GuessName App 
*By Ahmed RAHMOUNI*

## Installation

Pour preparer l'environment pour lancer l'appli , vous pouvez installer tout les packages utiliser
avec le gestionnaire de packages **NPM** :
* Installation des packages : `sudo npm install`
* Installation manuelle : accedez au fichier **packages.json** pour acceder aux differents packages utlisees
	
## Lancer l'appli
* Lancer l'appli : `node app.js`

## Fonctionement
### Population de la base de donnees 
Pour renitialiser la base de donnes ou redemarrer le serveur , il faut lancer le fichier resetDB.js par `node resetDB.js` 
### Fonctionement du jeu
sur la premiere page de l'appli , l'utilisateur clique sur le bouton **Start** pour lancer le jeu.
1. Le cote client lance une requette **Get** au serveur demandant un Prenom
2. Le serveur recoit la demande et selectionne un Prenon alteatoire parmi les noms de la base de donnees
3. Le seveur envoie une demande (Fetch) du sexe du nom par L'API **GenderApi** 
4. Le serveur **parse** la reponse en JSON et la renvoi avec le nom en reponse au cote client
5. Le client **script.js** recoit le nom et le sexe , construit une question avec les differnt choix possible et demarer le jeu
6. l'utilsateur repond a la question , script.js met a jour le score et prepare la question suivantes par **l'etape 1 ainsi de suite jusqu'au le score est soit 0 ou 20**.
7. le jeu est terminer , l'utlisateur recoit un message de fin , et a le choix de recommncer a nouveau.

## Temps de codage

ce projet m'a pris 6h repartie sur 2 jours 
* 2h pour le cote client
* 3h pour le cote serveur
* 1h pour la preparation de l'environement + correction des erreurs et les dernieres retouches

## Limitations

En considerons le tmeps de realisation de ce projet ainsi que mes faibles diponibilites durant ces derniers jours , il existe qulques aspects qui beneficerons d'ameliorations :
* UI/UX : etant un aspect secondaire du projet ,  je pouvais mieux presenter le jeu et rajouter plus d'informations/indications.
* GenderAPI retourne des **unknown** poru les renoms avec des accents, j'ai improvise remplacant les **unknown** par **male** . Cette erreur peux etre facilement corriger lors de population en remplacans tout les "é" par "e" ainsi de suite par la metode `String.replace()`.
* Le performance peut etre ameliorer : soit par appeler L'API au moment de population de la base de donnees pour que l'acces au nom et sexe soit plus rapide au moment du jeu, soit 	par eviter les parsing en JSON avant et apres chaque requettes.
