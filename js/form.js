const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // larg max: 300, altura max: 150

//lata de lixo 
ctx.beginPath();
ctx.moveTo(80, 75);
ctx.lineTo(220, 75);

ctx.moveTo(80, 75);
ctx.lineTo(95, 137);

ctx.moveTo(220, 75);
ctx.lineTo(205, 137);

ctx.lineTo(95, 137);
ctx.stroke();


//tampa do lixo
ctx.beginPath();
ctx.moveTo(205, 50);
ctx.lineTo(270, 110);

ctx.quadraticCurveTo(280, 110, 280, 105);
ctx.lineTo(220, 50);
ctx.quadraticCurveTo(210, 45, 205, 50);

ctx.moveTo(245, 73);
ctx.lineTo(263, 68);
ctx.lineTo(268, 73);
ctx.lineTo(250, 78);

ctx.moveTo(242, 70);
ctx.lineTo(260, 65);
ctx.quadraticCurveTo(273, 63, 278, 73);

ctx.moveTo(253, 81);
ctx.lineTo(271, 76);
ctx.quadraticCurveTo(280, 73, 278, 73);
ctx.stroke();


//relógio
ctx.beginPath();
ctx.arc(15, 25, 20, 0, Math.PI * 2, true);
ctx.stroke();








    
    

