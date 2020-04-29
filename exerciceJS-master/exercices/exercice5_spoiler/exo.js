let btn   = document.querySelector('button');
let p     = document.querySelector('p');
let hidden = true;

btn.addEventListener('click', () =>{
    if (hidden == true) {
        btn.innerHTML = 'Cacher';
        // p.classList.add('apparition');
        p.style.display = "block";
        hidden = false;
        
    } else {
        btn.innerHTML = 'Afficher';
        // p.classList.remove('apparition');
        p.style.display = "none";
        hidden = true;
    }
    
})