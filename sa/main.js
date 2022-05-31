const container = document.querySelector('.slider-wrapper')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    container.style.transform = 'translateX(-25%)'
})