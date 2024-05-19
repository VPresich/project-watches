const imgRef = document.querySelector('.sale-big-img');

imgRef && imgRef.addEventListener('click', () => {
    imgRef.classList.toggle('rotated'); 
    setTimeout(() => {
        imgRef.classList.toggle('rotated');
    }, 4000);
});
