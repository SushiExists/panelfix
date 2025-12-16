window.alert("Testing");

window.addEventListener ('DOMContentLoaded', () => { 
  document.querySelectorAll('img').forEach(img => { 
    if (img.src.includes('//k') && img.src.includes('.mb')) { 
      img.referrerPolicy = "no-referrer"; 
      img.src = img.src.replace('//k', '//n'); 
    } 
  }); 
}
