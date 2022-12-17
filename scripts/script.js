const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const title = card.querySelector('h2');

    card.addEventListener('mouseover', () => {
        title.style.color = 'red';
        card.style.backgroundColor = '#eeeeee';
    })

    card.addEventListener('mouseout', () => {
        title.style.color = '#000000';
        card.style.backgroundColor = '#ffffff';
    })
})