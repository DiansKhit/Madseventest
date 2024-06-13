document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square, index) => {
        const delay = index * 0.2;
        square.style.animationDelay = `${delay}s`;
    });
});
