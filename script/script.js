const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('ativo')
    })
})

document.addEventListener('click', (e) => {
    if (e.target.className === '') {
        faqs.forEach(faq => faq.classList.remove('ativo'))
    }
})