const categories = [
  {
    short: '3dp',
    long: '3D Printing',
    href: '3dprinting.html'
  }
];

export function displayTitle (cat) {
  let found = categories.find(el => cat === el.short);
  if(found){
    return found.long;
  } else {
    return cat||'';
  }
}

export function displayHref (cat) {
  let found = categories.find(el => cat === el.short);
  if(found){
    return found.href;
  } else {
    return null;
  }
}

function utils(){
  return {
    displayTitle,
    displayHref
  };
}

export default utils;