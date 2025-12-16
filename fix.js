(function () {
    'use strict';

    // senses if at ep
    if (pathname.startsWith('/title/')) {
        // sets interval for fixing links
        setInterval(() => { 
            document.querySelectorAll('img').forEach(img => { 
                if (img.src.includes('//k') && img.src.includes('.mb')) { 
                    img.referrerPolicy = "no-referrer"; 
                    img.src = img.src.replace('//k', '//n'); 
                } 
            }); 
        }, 2000);
    }
})();
