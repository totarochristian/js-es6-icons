/** Function used to initialize the elements in the main of index page. */
function Initialize() {
    icons.forEach(function (el) {
        //Define the card with the el data, add it to the card container
        //then add the node to an array of card nodes
        iconsArray.push(AddCard(el));
        //Code that will define the categories of the filter select
        if(!filtersCategories.includes(el.type)){
            document.getElementById("selFilter").innerHTML += '<option value="'+el.type+'" selected>'+el.typeIT+'</option>';
            filtersCategories.push(el.type);
        }
    });
    //Force the select of first element of the select
    document.getElementById("selFilter").querySelector("option").setAttribute("selected","");
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
    //Append sub elements to father element and then the card to the card
    //container
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
        //If the filter value is selected and the icon type is not the 
        //selected type, set not visible the card, otherwise, remove 
        //the d-none class
        if(filterSelected && icons[i].type != filterSelected)
            iconsArray[i].classList.add("d-none");
        else
            iconsArray[i].classList.remove("d-none");
    }
}

/** Function used to search the value wroted in the search input element.
 *  First will apply the filters selected by the user.
 */
function SearchElements(){
    //If no filter is selected, will reset the visibility of all the elements
    // otherwise will make the first filtering of the elements.
    ApplyFilters();
    let searchWord = document.getElementById("txtSearch").value;
    for(let i=0; i<icons.length; i++){
        //If the card is visible and the word searched isn't empty
        if(!iconsArray[i].classList.contains("d-none") && searchWord){
            //if the name not includes the word to search, make it not visible
            if(!icons[i].name.includes(searchWord))
                iconsArray[i].classList.add("d-none");
        }
    }
}

function GenerateRandomColor(){
    let generatedColor = '#';
    for(let i=0; i<6; i++)
        generatedColor += ConvertNumToHex(GetRandomInt(15,0));
    return generatedColor;
}

/**
 * Function that will generate a random int
 * @param {bigint} max Max value of the interval
 * @param {bigint} min Min value of the interval
 * @returns {bigint} Generated random int value
 */
function GetRandomInt(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ConvertNumToHex(num){
    if(num<=9)
        res = num;
    else{
        switch(num){
            case 10: res = 'A'; break;
            case 11: res = 'B'; break;
            case 12: res = 'C'; break;
            case 13: res = 'D'; break;
            case 14: res = 'E'; break;
            case 15: res = 'F'; break;
        }
    }
    return res;
}