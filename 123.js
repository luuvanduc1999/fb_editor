document.onkeyup = function(e) {
  if (e.which == 49) {
    //KHÔNG
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Không") C[i].children[1].click();
  } else if (e.which == 50) {
    //KHÔNG CHẮC CHẮN
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Không chắc chắn") C[i].children[1].click();
  } else if (e.which == 51) {
    //CÓ
    C=document.getElementsByClassName("_5r7k _5r7m _2p24");
    for (var i=0; i<C.length; i++)
        if (C[i].children[0].textContent=="Có") C[i].children[1].click();
  } 
}

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }
document.onkeyup = function(e) {
  if (e.which == 88) {
    i=parseInt(document.getElementsByClassName("badge bg-green ng-binding")[0].textContent);
    copy(i+1);
  }
}
