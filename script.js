document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const changeSizeToggle = document.getElementById('changeSizeToggle');
    const kotak = document.querySelector('.kotak');
    const mainImage = document.getElementById('mainImage');
    const defaultImage = 'light.jpg'
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        kotak.classList.toggle('change-color');
        body.classList.toggle('dark-background');
       
        if(kotak.classList.contains('change-color')){
            mainImage.src = 'dark.jpg'
        } else{
            mainImage.src = defaultImage;
        }
    });

    changeSizeToggle.addEventListener('click', function() {
        kotak.classList.toggle('large-size');
    });
});
