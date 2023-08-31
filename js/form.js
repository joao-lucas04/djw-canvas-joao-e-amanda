const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // larg max: 500, altura max: 500

//lata de lixo 
ctx.beginPath();
ctx.moveTo(352, 247);
ctx.lineTo(128, 247);
ctx.lineTo(152, 452);

ctx.moveTo(352, 247);
ctx.lineTo(328, 452);

ctx.lineTo(152, 452);
ctx.fill();
ctx.stroke();


//detalhes da lata de lixo
ctx.beginPath();
ctx.moveTo(255, 285);
ctx.lineTo(255, 417);
ctx.quadraticCurveTo(240, 435, 225, 417);
ctx.lineTo(225, 285);
ctx.quadraticCurveTo(240, 270, 255, 285);

ctx.moveTo(184, 285);
ctx.lineTo(195, 417);
ctx.quadraticCurveTo(180, 435, 165, 417);
ctx.lineTo(154, 285);
ctx.quadraticCurveTo(169, 270, 184, 285);

ctx.moveTo(326, 285);
ctx.lineTo(315, 417);
ctx.quadraticCurveTo(300, 435, 285, 417);
ctx.lineTo(296, 285);
ctx.quadraticCurveTo(311, 270, 326, 285);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();


//tampa do lixo
ctx.beginPath();
ctx.moveTo(328, 165);
ctx.lineTo(432, 363);

ctx.quadraticCurveTo(448, 363, 448, 346);
ctx.lineTo(352, 165);
ctx.quadraticCurveTo(336, 148, 328, 165);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(392, 240);
ctx.lineTo(420, 224);
ctx.lineTo(428, 240);
ctx.lineTo(400, 257);

ctx.moveTo(387, 231);
ctx.lineTo(416, 214);
ctx.quadraticCurveTo(430, 207, 442, 234);

ctx.moveTo(406, 267);
ctx.lineTo(433, 250);
ctx.quadraticCurveTo(447, 243, 442, 234);
ctx.stroke();


//relógio
ctx.beginPath();
ctx.arc(225, 145, 90, 0, Math.PI * 2, true);
ctx.fillStyle = "gray";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(225, 145, 80, 0, Math.PI * 2, true);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(225, 145, 10, 0, Math.PI * 2, true);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


//ponteiros
ctx.beginPath();
ctx.fillRect(148, 143, 20, 5);
ctx.fillRect(282, 143, 20, 5);
ctx.fillRect(223, 68, 5, 20);
ctx.fillRect(223, 202, 5, 20);

ctx.beginPath();
ctx.moveTo(228, 135);
ctx.lineTo(228, 100);
ctx.quadraticCurveTo(225, 90, 223, 100);
ctx.lineTo(223, 135);
ctx.fillStyle = "gray";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(234, 142);
ctx.lineTo(259, 142);
ctx.quadraticCurveTo(269, 145, 259, 147);
ctx.lineTo(234, 148);
ctx.fillStyle = "gray";
ctx.fill();
ctx.stroke();


//efeito de queda
ctx.beginPath();
ctx.moveTo(225, 3);
ctx.lineTo(225, 13);
ctx.moveTo(225, 18);
ctx.lineTo(225, 48);

ctx.moveTo(207, 8);
ctx.lineTo(207, 18);
ctx.moveTo(207, 23);
ctx.lineTo(207, 53);

ctx.moveTo(243, 8);
ctx.lineTo(243, 18);
ctx.moveTo(243, 23);
ctx.lineTo(243, 53);
ctx.stroke();















    
    

