let res = window.document.querySelector('#res');
let faca = window.document.querySelector('#faca');
let municao = window.document.querySelector('#Munição');
let arco = window.document.querySelector('#Arco');
let kitmedico = window.document.querySelector('#Kit-Médico');
let sheriff = window.document.querySelector('#sheriff');
let marshall = window.document.querySelector('#marshall');
let colete = window.document.querySelector('#colete');
let capacete = window.document.querySelector('#capacete');
let camuflagem = window.document.querySelector('#camuflagem');
let items = [];
let moneyElement = window.document.querySelector('#money');
let money = Number(moneyElement.textContent);
money = 500;
moneyElement.textContent = money;
function selecionar(item) {
   
   if (item === 'faca' && money >= 40) {
      money -= 40;
      moneyElement.textContent = money;
      items.push("faca");
      res.style.color = 'green';
      res.innerHTML = `O item faca foi adicionado à mochila`;
   } else if (item === 'Munição' && money >= 20) {
      money -= 20; 
      moneyElement.textContent = money;
      items.push("municao");
      res.style.color = 'green';
      res.innerHTML = `O item munição foi adicionado à mochila`;
   } else if (item === 'Arco' && money >= 50) {
      money -= 50; 
      moneyElement.textContent = money;
      items.push("arco");
      res.style.color = 'green';
      res.innerHTML = `O item Arco foi adicionado à mochila`;
   } else if (item === 'Kit-Médico' && money >= 30) {
      money -= 30; 
      moneyElement.textContent = money;
      items.push("kit-medico");
      res.style.color = 'green';
      res.innerHTML = `O item kit-médico foi adicionado à mochila`;
   }  else if (item === 'sheriff' && money >= 80) {
      money -= 80; 
      moneyElement.textContent = money;
      items.push("sheriff");
      res.style.color = 'green';
      res.innerHTML = `O item sheriff foi adicionado à mochila`;
   }  else if (item === 'marshall' && money >= 70) {
      money -= 70; 
      moneyElement.textContent = money;
      items.push("marshall");
      res.style.color = 'green';
      res.innerHTML = `O item marshall foi adicionado à mochila`;
   }  else if (item === 'colete' && money >= 50) {
      money -= 50; 
      moneyElement.textContent = money;
      items.push("colete");
      res.style.color = 'green';
      res.innerHTML = `O item colete foi adicionado à mochila`;
   }  else if (item === 'capacete' && money >= 40) {
      money -= 40; 
      moneyElement.textContent = money;
      items.push("capacete");
      res.style.color = 'green';
      res.innerHTML = `O item capacete foi adicionado à mochila`;
   }  else if (item === 'camuflagem' && money >= 25) {
      money -= 25; 
      moneyElement.textContent = money;
      items.push("camuflagem");
      res.style.color = 'green';
      res.innerHTML = `O item camuflagem foi adicionado à mochila`;
   }

   else {
      res.style.color = 'red';
      res.innerHTML = "Você <strong>NÃO</strong> tem dinheiro suficiente para comprar este item";
   }
}

faca.addEventListener('click', function() {
   selecionar('faca');
});
municao.addEventListener('click', function() {
   selecionar('Munição');
});
arco.addEventListener('click', function() {
   selecionar('Arco');
});
kitmedico.addEventListener('click', function() {
   selecionar('Kit-Médico');
});

sheriff.addEventListener('click', function() {
   selecionar('sheriff');
});

marshall.addEventListener('click', function() {
   selecionar('marshall');
});

colete.addEventListener('click', function() {
   selecionar('colete');
});

capacete.addEventListener('click', function() {
   selecionar('capacete');
});

camuflagem.addEventListener('click', function(){
   selecionar('camuflagem');
});

function mochila(){
   if(items.length == 0){
      alert("Sua mochila está vazia!");
   }
   else {
    alert(`Seus itens na mochila são: ${items}`);

   }
}
