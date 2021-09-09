# projet portfolio dev
## Comment appliquer les bonnes pratiques ?

### Pour le code HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Best practice">
    <title>exercice</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

```
### Pour le css

```css
/*un ptit reset css*/
html{
    font-size: 62.5%;
}
body{
    font: 1.6rem sans-serif;
    margin: 0;
}
h1,h2,h3,h4,ol,ul,li,p{
    margin: 0;
    padding: 0;
}
a{
    list-style: none;
}

```
Voir la page web *[page web]()*

### commande git 
git init
mkdir monPremierRepo
git add checklist-vacances.md
git add
git commit -m "Ajouté ma checklist-vacances.md (woohoo!)"
git status voir les commits
git log "voir l'historique"
git commit -a -m "Ajouté itinéraire dans checklist-vacances.md"

Connexion reposito
/*exemple*/
$ git remote add origin https://github.com/giusmili/html.git 
$ git add --all "ou un fichier que vous avez modifié"
$ git commit -a -m "votre commit"
$ git push origin master
$ git pull : Mettre à jour le dépôt local
$ git pull origin develop : mettre à jour la branche
git clone 

Créer une branch

$ git branch nom_de_ma_branch_nouvelle
$ git checkout chisir sa branche
git branch -d [nom_de_la_branche] supprimer une branche

Help git

git help config
git help push
git help pull
git help branch
