
function GenerateRandomColors(){
    const hex = 0xFFFFFF;
 
    let number = Math.random()* hex;
 
    number = Math.floor(number);
 
    number = number.toString(16);
 
    const color = number.padStart(6, 0);
 
    return `#${color}`;
 }
 
 function ChangeBorderColor(){
    const borderColor = GenerateRandomColors();
 
 document.getElementById('first-cover').style.backgroundColor = borderColor
    
 }