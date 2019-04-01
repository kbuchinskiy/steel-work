var contactPopup = document.getElementById('contactPopup'),
    thanksPopup = document.getElementById('thanksPopup'),
    questionForm = document.querySelector('#question form'),
    thanksPopupForm = document.querySelector('#contactPopup form'),
    contactPopupOpenBtn = document.getElementById('contactPopupOpenBtn'),
    contactPopupCloseBtn = contactPopup.querySelector('.close-btn'),
    thanksPopupCloseBtn = thanksPopup.querySelector('.close-btn');

var openContactPopupBtnsCollection = document.querySelectorAll('[data-open-popup-id="contact-popup"]')


// helpers
function openPopup(e, popupId) {
    e.preventDefault();

    if (e.target.classList.contains('hamburger-callback')) {
       document.querySelector('.js-menu').classList.remove('active');
       document.querySelector('.hamburger').classList.remove('is-active');  
    }
    document.body.scrollTop = 0;
    popupId.classList.add('active');
}

function closePopup(e, popupId) {
    popupId.classList.remove('active');
}

// events


Array.prototype.forEach.call(openContactPopupBtnsCollection, function (button) {
    button.onclick = function (e) {
        openPopup(e, contactPopup);
    };
});

getQuiz.onclick = function (e) {
    openPopup(e, contactPopup);
};

contactPopupCloseBtn.onclick = function (e) {
    closePopup(e, contactPopup);
}

thanksPopupCloseBtn.onclick = function (e) {
    closePopup(e, thanksPopup);
}

questionForm.onsubmit = function (e) {
    openPopup(e, thanksPopup);
}

thanksPopupForm.onsubmit = function (e) {
    closePopup(e, contactPopup);
    openPopup(e, thanksPopup);
}


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-overlay')) {
        contactPopup.classList.remove('active');
        thanksPopup.classList.remove('active');
    }
})