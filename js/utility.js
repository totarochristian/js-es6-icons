/** Function used to initialize the elements in the main of index page. */
function Initialize() {
    icons.forEach(function (el) {
        iconsArray.push(AddCard(el));
        //Code that will define the categories of the filter select
        if(!filtersCategories.includes(el.type)){
            document.getElementById("selFilter").innerHTML += '<option value="'+el.type+'" selected>'+el.typeIT+'</option>';
            filtersCategories.push(el.type);
        }
    });
}

/**
 * Function used to add a single card in the card container and return the node card.
 * @param {*} elem Data of the element to add in the card container
 * @returns Card created and added in the card container
 */
function AddCard(elem){
    const card = document.createElement("div");
    card.classList.add("card");
    const h2 = document.createElement("h2");
    h2.classList.add("text-center","card-header",elem.prefix+elem.family,elem.prefix+elem.name);
    h2.style.color = elem.color;
    const bd = document.createElement("div");
    bd.classList.add("card-body","d-flex","align-items-center","justify-content-center");
    const h6 = document.createElement("h6");
    h6.classList.add("card-title");
    h6.innerText = elem.name;
    bd.appendChild(h6);
    card.appendChild(h2);
    card.appendChild(bd);
    document.getElementById("cardContainer").appendChild(card);
    return card;
}

/** Function used to apply the selected filter. */
function ApplyFilters(){
    let filterSelected = document.getElementById("selFilter").value;
    for(let i=0; i<icons.length; i++){
        if(filterSelected && icons[i].type != filterSelected)
            iconsArray[i].classList.add("d-none");
        else
            iconsArray[i].classList.remove("d-none");
    }
}