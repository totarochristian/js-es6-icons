/*
------------------------------------------------------------------------------
-------------------------------- Milestones ----------------------------------
------------------------------------------------------------------------------
Milestone 1
Starting from the data structure provided, display a box for each icon on the 
page, containing the name of the icon and the icon itself.

Milestone 2
Each icon has a "color" property: use this property to display icons of the 
corresponding color.

Milestone 3
Add a select to the page where the options correspond to the various types of 
icons (animal, vegetable, user). When the user selects a type from the select,
display only the corresponding icons.
------------------------------------------------------------------------------
---------------------------------- Bonus -------------------------------------
------------------------------------------------------------------------------
BONUS
1 - modify the data structure provided and value the "color" property 
dynamically: randomly generate a color code, knowing that the hexadecimal 
notation is formed by the symbol "#" followed by 6 alphanumeric characters 
between 0 and 9 and A and F.
2 - populate the milestone 3 select options dynamically.
------------------------------------------------------------------------------
----------------------------------- Tips -------------------------------------
------------------------------------------------------------------------------
Tips of the day:
- As always, we start with analyzing and understanding the delivery first. Let's
break down the problem into logical micro-steps that we will only later 
transform into code.
- The icons in the data structure refer to the well-known Font Awesome library, 
so first of all, make sure you have inserted the link to the cdn in the page 
header.
- Then, based on the reference code on the Font Awesome site, let's analyze how 
the <i> tag of any icon is formed, in particular let's focus on the classes.
How can we use the data in our data structure to create the html element 
correctly and display the icon on the page?
------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/

const animalColor = GenerateRandomColor();
const vegetableColor = GenerateRandomColor();
const userColor = GenerateRandomColor();

/** Array with the cards data */
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        typeIT: 'Animali',
        family: 'solid',
        color: animalColor
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        typeIT: 'Vegetali',
        family: 'solid',
        color: vegetableColor
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        typeIT: 'Vegetali',
        family: 'solid',
        color: vegetableColor
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        typeIT: 'Vegetali',
        family: 'solid',
        color: vegetableColor
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        typeIT: 'Vegetali',
        family: 'solid',
        color: vegetableColor
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        typeIT: 'Utenti',
        family: 'solid',
        color: userColor
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        typeIT: 'Utenti',
        family: 'solid',
        color: userColor
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        typeIT: 'Utenti',
        family: 'solid',
        color: userColor
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        typeIT: 'Utenti',
        family: 'solid',
        color: userColor
    }
];
/** Array with the card nodes */
let iconsArray = [];

let filtersCategories = [];

//Call the Initialize function at the load of the window
window.addEventListener("load", Initialize);

//On change of filter select value, call the ApplyFilters function
document.getElementById("selFilter").addEventListener("change", SearchElements);

//On click of search button or on change search text input, call the SearchElements 
//function
document.getElementById("btnSearch").addEventListener("click",SearchElements);
document.getElementById("txtSearch").addEventListener("change",SearchElements);