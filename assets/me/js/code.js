function doHide(obj){
  alert(obj.nextSibling.tagName);
  if(obj.nextSibling.style.display=='block') 
    obj.nextSibling.style.display='none';
  else	
    obj.nextSibling.style.display='block';
}

function doShow(obj){
  alert(obj.nextSibling.tagName);
  if(obj.innerText=='+'){
    obj.nextSibling.style.display='none';
    obj.innerText = '-';
  }else{
    obj.nextSibling.style.display='block';
    obj.innerText = '+';
  }
}
