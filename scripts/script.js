const links = document.querySelectorAll('a');



links.forEach(link => {
    const card = link.querySelector('.card');
    const title = card.querySelector('h2');

    function hover() {
        title.style.color = 'red';
    
        card.style.backgroundColor = '#eeeeee';
    
        link.style.transform = 'scale(1.1)';
        link.style.zIndex = 1;
    }
    
    function mouseAway() {
        title.style.color = '#000000';
    
        card.style.backgroundColor = '#ffffff';
    
        link.style.transform = 'scale(1)';
        link.style.zIndex = 0;
    }


    card.addEventListener('mouseover', hover)

    card.addEventListener('mouseout', mouseAway)
})

