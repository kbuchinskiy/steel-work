$(document).ready(function () {
    const illustrationBlock = document.querySelector('#technology1 .illustration-block');

    illustrationBlock.addEventListener('click', toggleCaption);

    function toggleCaption(e) {
        if (e.target.classList.contains('toggle-caption-btn')) {
            e.target.closest('.caption-container').classList.toggle('active');
        }
    }
});

