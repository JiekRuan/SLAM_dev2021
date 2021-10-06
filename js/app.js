document.addEventListener('DOMContentLoaded', () => {
    console.log("chui la");
    // Le DOM
    let parents, child, mainTitle
        //  child = ["linux", "OS", "Android"]
        // parents = document.querySelectorAll("section")[1]
        mainTitle = document.querySelector("header > h1")
        /*Gestionnaire */
        mainTitle.addEventListener("click",()=>{
            mainTitle.classList.toggle("color-main-title")
        })
    // for(i = 0; i < parents.childNodes.length; i++){
    //     console.log(parents.childNodes[i])
    // }
    // /*Créer un element HTML dans le DOM */
    // el = document.createElement("ul")
    
    // parents.prepend(el)
    
    // for (index of child){
    //     let value = child[index]
    //     el.innerHTML += `<li>${index} : ${value}</li>`
    // }
    
    /*Ajouter une date dans le footer par le DOM */
    
    // date = new Date()
    // console.log(date.getFullYear())
    // dateVar = document.querySelector("footer > address > ul > li:last-child")
    // dateVar.innerText += `${date.getFullYear()}`
    // console.log(dateVar)

    const userDate = ({
        date : new Date(),
        dateVar : document.querySelector("footer > address > ul > li:last-child"),
            calc(n){
                console.log(n*n);
            }
    })
    userDate.calc(10)

    console.log(userDate.date.getFullYear())
    userDate.dateVar.innerText += `${userDate.date.getFullYear()}`

    let perso = {
        nom: "kiryu",
        annee: 2018
    }
    console.log(perso.nom)
    const newPerso = Object.create(perso)
    newPerso.nom = "sasaki"
    console.log(newPerso.nom)
})