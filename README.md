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
        * copier des fichiers (attention aux fichiers commançant par .)
        * template
        * Gruntfile Editor API
        * finalisation
    * sous générateurs
    * testez vos générateurs
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
* Récupérer les réponses de l'utilisateur. **(PROMPT)**
* A partir des réponses, générer le fichier index.html **(THIS.TEMPLATE)**
    * Générer les options
    * Créer une page de garde avec le titre de la prez, le nom de l'auteur de son twitter
* Créer un fichier bower.json et le copier dans le répertoire de destination **(THIS.COPY)**
*