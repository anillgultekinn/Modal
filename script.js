'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCLoseModal = document.querySelector('.close-modal');
const btnsOpenMOdal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeMOdal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenMOdal.length; i++) {
    btnsOpenMOdal[i].addEventListener('click', openModal);
}

btnCLoseModal.addEventListener('click', closeMOdal);

overlay.addEventListener('click', closeMOdal);

// klavyede bir tuşa bastığımız anda tetiklenecek
document.addEventListener('keydown', function (e) {
    console.log(e.key);

    // if (e.key === 'Escape') {
    //     if (!modal.classList.contains('hidden')) {
    //         closeMOdal();
    //     }
    // }

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeMOdal();
    }
});
