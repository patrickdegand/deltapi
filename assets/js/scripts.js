// Back to top
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        const backToTopScrollFunction = () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                backToTopButton.classList.add('w3-show');
            } else {
                backToTopButton.classList.remove('w3-show');
            }
        };

        const backToTopFunction = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', backToTopScrollFunction);
        backToTopButton.addEventListener('click', backToTopFunction);
    }
});

