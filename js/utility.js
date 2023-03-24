function Initialize() {
    icons.forEach(function (p) {
        iconsArray.push(AddCard(p));
    });
}

function AddCard(elem){
    // <div class="card">
    //     <h2 class="card-header fa-solid fa-cat"></h2>
    //     <div class="card-body">
    //         <h6 class="card-title">Cat</h6>
    //     </div>
    // </div>
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