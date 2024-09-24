


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addPrimaryBg(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-primaryColor');
    element.classList.add('text-white');
}

function removePrimaryBg(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-primaryColor');
    element.classList.remove('text-white');
}

function getInputValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    const elementNumber = parseInt(elementValue);
    return elementNumber;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const elementNumber = parseInt(elementInnerText);
    return elementNumber;
}

function getValueByElement(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseFloat(element);
    return value;
}



// function setTextElementById(elementId, value){
//     const element = document.getElementById(elementId);
//     element.innerText = value;
// }