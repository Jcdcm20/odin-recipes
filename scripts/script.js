const links = document.querySelectorAll('a');

links.forEach(link => {
    const card = link.querySelector('.card');
    const title = card.querySelector('h2');

    card.addEventListener('mouseover', () => {
        title.style.color = 'red';

        card.style.backgroundColor = '#eeeeee';
        
        link.style.transform = 'scale(1.1)';
        link.style.zIndex = 1;
    })

    card.addEventListener('mouseout', () => {
        title.style.color = '#000000';

        card.style.backgroundColor = '#ffffff';
        
        link.style.transform = 'scale(1)';
        link.style.zIndex = 0;
    })
})