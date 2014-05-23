prez-yeoman-generator
=====================

# Plan

* présentation de Yeoman
* exemple de générateurs
* créez le votre
    * installation
        * structure du répertoire créé
    * poser des questions et recueillir les réponses (Inquirer.js)
    * actions
        * créer des répertoires
        * copier des fichiers (attention aux fichiers commençant par .)
        * template
        * Gruntfile Editor API
        * finalisation
    * sous générateurs
    * testez vos générateurs
        * quoi ?
            * Présence ou absence d'un fichier
            * Présence ou absence du contenu d'un fichier
        * comment ?
            * Créer un répertoire de test
            * Créer le générateur
            * Mocker les entrées
            * Appeler le générateur
            * Vérifier les assertions
    * partagez votre générateur
    * bonus
        * couleur
        * lancer wiredep
        * Greeting Yeoman

## Live coding
* Expliquer ce que l'on veut faire
    * créer 'index.html avec les options qu'il faut (prompt, template)
    * créer un fichier style.css pour les styles personnels
    * créer un gruntfile qui lance grunt-browser-sync avec livereload (Gruntfile Editor Api)
    * créer un package.json avec les modules grunt, grunt-browser-sync
    * créer bower.json (copie fichier)
    * appeler la commande bower install et npm install (install dependencies)
    * appeler grunt-wiredep (end action)
    * générer une section et le fichier javascript (sub-generator)

* Utiliser generator-generator pour générer le générateur ruban **(YO GENERATOR-GENERATOR)**
* Essayer votre générateur **(NPM LINK)** 
* Récupérer les réponses de l'utilisateur. **(PROMPT)**
* A partir des réponses, générer le fichier index.html 
    * Générer les options
    * Créer une page de garde avec le titre de la prez, le nom de l'auteur de son twitter
* Créer un fichier bower.json et le copier dans le répertoire de destination **(THIS.TEMPLATE)**
* Créer un répertoire CSS et y placer un fichier CSS pour centrer la première slide **(THIS.SRC.COPY THIS.DEST.MKDIR)**
* Copier un fichier editorconfig et insister sur le nom du fichier qui ne doit pas commencer par un . **(THIS.SRC.COPY)**
* Télécharger les dépendances Bower **(THIS.BOWERINSTALL)**
* Créer un fichier Gruntfile et créer les taches browserSync + jshint + watch **(GRUNTFILEAPI)**
* Créer le package.json et le copier
* Télécharger les dépendances npm **(THIS.INSTALLDEPENDENCIES)**
* Finalisation **(ON.('END'))**
    * Appeler wiredep **(ON.('WIREDEP'))**
    * Afficher un message **(THIS.LOG(CHALK('HELLO'))**
* Tester les générateurs
    * 