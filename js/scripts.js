

function getRandomInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }


function criarEstrela()
{
    var rand = getRandomInt(3, 14);
  var tempoDeVida = getRandomInt(5,10);
    var star = $('<div class="star"/>').css({
      width:rand+'px',
      height:rand+'px',
      left: largura-10+'px', 
      top: Math.floor((Math.random()*altura)+1), 
      '-webkit-transition': 'all '+tempoDeVida+'s linear',
      '-webkit-transform': 'translate(0px, 0px)'
    });
    $('body').append(star);
    
    window.setTimeout(function(){
      star.css({
        '-webkit-transform': 'translate(-'+largura+'px, 0px)'
      });
    }, getRandomInt(5,10)*10);  

  window.setTimeout(function(){star.remove();}, tempoDeVida*1000);
}

function moveNyan()
{
    var tamX = nyan.width()/2,
      tamY = nyan.height()/2;
    px += (posX - px - tamX) / 50;
    py += (posY - py - tamY) / 50;
 
    nyan.css({
      left: px + 'px',
      top: py + 'px'
    });
}
function peidaArcoIris()
{
  var qnt = Math.floor(nyan.position().left/9)+2;

  if(pilha.length >= qnt) pilha.pop();
  
  pilha.unshift(py);
  
  rainbow.hide();
  for(var i = 0; i < qnt; i++)
  {
    var am = (i%2);
    if(an) am = (i%2) ? 0 : 1 ;
    
    rainbow.eq(qnt-i).css({top: pilha[i]+am}).show();
  }
}

