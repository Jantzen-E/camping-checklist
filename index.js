const listElement = document.querySelector('#list');
const textInputBoxElement = document.querySelector('#textInputBox');
const addItemButtonElement = document.querySelector('#addItemButton');
const checkAllBoxes1Element = document.querySelector('#checkAllBoxes1');
const checkAllBoxes2Element = document.querySelector('#checkAllBoxes2');
const checkAllBoxes3Element = document.querySelector('#checkAllBoxes3');
const checkAllBoxes4Element = document.querySelector('#checkAllBoxes4');
const checkAllBoxes5Element = document.querySelector('#checkAllBoxes5');
const checkAllBoxes6Element = document.querySelector('#checkAllBoxes6');
const checkAllBoxes7Element = document.querySelector('#checkAllBoxes7');

let x = document.getElementsByName("sleeping");

checkAllBoxes1Element.addEventListener('click', function() {
    checkAllBoxesNow(x);
});
// *************************************************************
let y = document.getElementsByName("gear");

checkAllBoxes2Element.addEventListener('click', function() {
    checkAllBoxesNow(y);
});

let vehicleChecks = document.getElementsByName("vehicleChecks");

checkAllBoxes3Element.addEventListener('click', function() {
    checkAllBoxesNow(vehicleChecks);
});

let dryCooler = document.getElementsByName("dryCooler");

checkAllBoxes4Element.addEventListener('click', function() {
    checkAllBoxesNow(dryCooler);
});

let hygiene = document.getElementsByName("hygiene");

checkAllBoxes5Element.addEventListener('click', function() {
    checkAllBoxesNow(hygiene);
});

let cookingMaterials = document.getElementsByName("cookingMaterials");

checkAllBoxes6Element.addEventListener('click', function() {
    checkAllBoxesNow(cookingMaterials);
});

let nutrition = document.getElementsByName("nutrition");

checkAllBoxes7Element.addEventListener('click', function() {
    checkAllBoxesNow(nutrition);
});

function checkAllBoxesNow(list){
    let allChecked = checkIfAllChecked(list);
    console.log(allChecked);
    if(!allChecked) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].type === "checkbox") {
                list[i].checked = true;
            };
        };
    }
    else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].type === "checkbox") {
                list[i].checked = false;
            };
        };
    }
}

function checkIfAllChecked (checkList) {
    for (let i = 0; i < checkList.length; i++) {
        if (checkList[i].type === "checkbox") {
            if (!checkList[i].checked) {
                return false;
            };
        };
    };
    return true;
};



// if (x.length = '16') {
    //     x[i].checked = false;
    // };
// var max = 16;

// var allInputs = document.querySelector("checkAllBoxes1");
// for (var i = 0; i < max; i++) {
//     if (allInputs[i].type === 'checkbox')
//         allInputs[i].checked = true;
// };


// function check() {
//     document.getElementById("checkAllBoxes1").checked = true;
// };

// checkAllBoxes1Element.addEventListener ('click', function(check) {
// });




// checkAllBoxes1Element.addEventListener ('click', function() {
//     let checked = document.getElementById("checkAllBoxes1Element").checked;

//     if (checked == true) {
//         checkAllBoxes1Element.checked;
//     };
// });

addItemButtonElement.addEventListener ('click', function() {
    const item = textInputBoxElement.value;

    if (item) {
        const newListElement = document.createElement('li');
        newListElement.textContent = item;

        // Add the list-element class 
        newListElement.classList.add('list-element');

        newListElement.addEventListener('click', function() {
            newListElement.remove();
        });

        listElement.append(newListElement);
        textInputBoxElement.value = '';
    }
    else {
        alert("Write something in the search field");
    }

    addNewListItem();
});

textInputBoxElement.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        const item = textInputBoxElement.value;

        if (item) {
            const newListElement = document.createElement('li');
            newListElement.textContent = item;
    
            // Add the list-element class 
            newListElement.classList.add('list-element');
    
            newListElement.addEventListener('click', function() {
                newListElement.remove();
            });
    
            listElement.append(newListElement);
            textInputBoxElement.value = '';
        }
        else {
            alert("Write something in the search field");
        }
        addNewListItem();

        }
    });

function addNewListItem() {

};