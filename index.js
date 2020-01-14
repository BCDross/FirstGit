var diceFace=new Array("images/d1.gif", "images/d2.gif", "images/d3.gif", "images/d4.gif", "images/d5.gif", "images/d6.gif"); 
        
/////////////////////////////////

function throwdice1(){
    //create a random integer between 0 and 5
    var randomdice = Math.round(Math.random() * 5);
    document.images["mydice1"].src = diceFace[randomdice];
}

function throwdice2() {
    //create a random integer between 0 and 5 for the second dice.
    var randomdice = Math.round(Math.random() * 5);
    document.images["mydice2"].src = diceFace[randomdice];
}

function delaythrow2()
{
    setTimeout("throwdice2()", 500);
}