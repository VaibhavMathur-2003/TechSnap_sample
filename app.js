

const Profile = document.querySelector('.avatar');
const Profile_dropDown = document.querySelector('.profile_dropDown');

Profile.addEventListener('click', () => {
    if (Profile_dropDown.classList.contains('visible')) {
        Profile_dropDown.classList.remove('opacity-100', 'pointer-events-auto', 'visible');
        Profile_dropDown.classList.add('opacity-0', 'pointer-events-none', 'hidden');
    } else {
        Profile_dropDown.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
        Profile_dropDown.classList.add('opacity-100', 'pointer-events-auto', 'visible');
    }
});


const notification_bell = document.querySelector('.notification_bell');
const notification_dropDown = document.querySelector('.notification_dropdown');

notification_bell.addEventListener('click', () => {
    console.log('here');
    if (notification_dropDown.style.opacity === '1') {
        notification_dropDown.classList.remove('opacity-100', 'pointer-events-auto');
        notification_dropDown.classList.add('opacity-0', 'pointer-events-none');
    } else {
        notification_dropDown.classList.remove('opacity-0', 'pointer-events-none');
        notification_dropDown.classList.add('opacity-100', 'pointer-events-auto');
    }
});

//-------------------------------------------------------------------------- 
const goalsSection = document.querySelector('.goals_DropDown');
const goalButton = document.querySelector('.points');

const goalsDrop = () => {
    if (goalsSection.style.visibility == 'visible') {
        goalsSection.style.visibility = 'hidden';
    } else {
        goalsSection.style.visibility = 'visible';
    }
};

const powerSection = document.querySelector('.power_dropDown');
const coinSection = document.querySelector('.coin_dropDown');

const powerhandler = () => {
    if (powerSection.style.visibility == 'visible') {
        powerSection.style.visibility = 'hidden';
    } else {
        powerSection.style.visibility = 'visible';
    }
};

const Coinhandler = () => {
    if (coinSection.style.visibility == 'visible') {
        coinSection.style.visibility = 'hidden';
    } else {
        coinSection.style.visibility = 'visible';
    }
};

const power = document.querySelector('.shock');
const coin = document.querySelector('.coin');

//--------------------------------
document.addEventListener('click', function (event) {
    var isClickInsideAvatar = Profile.contains(event.target);
    var isClickInsideBell = notification_bell.contains(event.target);
    var isClickInsideDropdown = notification_dropDown.contains(event.target);
    var isClickInsideGoal = goalButton.contains(event.target);
    var isClickInsideGoalSection = goalsSection.contains(event.target);
    let isClickInsideShock = power.contains(event.target);
    let isClickInsideCoin = coin.contains(event.target);

    if (!isClickInsideAvatar) {
        Profile_dropDown.classList.remove('opacity-100', 'pointer-events-auto');
        Profile_dropDown.classList.add('opacity-0', 'pointer-events-none');
    }

    if (!isClickInsideShock) {
        powerSection.style.visibility = 'hidden';
    }

    if (!isClickInsideCoin) {
        coinSection.style.visibility = 'hidden';
    }

    if (!isClickInsideGoal && !isClickInsideGoalSection) {
        goalsSection.style.visibility = 'hidden';
    }

    if (!isClickInsideBell && !isClickInsideDropdown) {
        notification_dropDown.classList.remove('opacity-100', 'pointer-events-auto');
        notification_dropDown.classList.add('opacity-0', 'pointer-events-none');
    }
});

// ---------leaderboard data-----------------------
const slideMenu = () => {
    const sideMenu = document.querySelector('aside');
    const ham = document.querySelector('#ham_icon');
    const blurBack = document.querySelector('.max_width_holder');

    if (sideMenu.classList.contains('left-0')) {
        sideMenu.classList.remove('left-0');
        sideMenu.classList.add('-left-60');
        ham.src = 'https://img.icons8.com/android/96/000000/menu.png';
        blurBack.classList.remove('pointer-events-none', 'filter', 'blur');
        blurBack.classList.add('pointer-events-all', 'filter', 'blur-none');
    } else {
        ham.src = 'https://img.icons8.com/material-outlined/24/000000/delete-sign.png';
        sideMenu.classList.remove('-left-60');
        sideMenu.classList.add('left-0', 'bottom-0');
        blurBack.classList.remove('pointer-events-all', 'filter', 'blur-none');
        blurBack.classList.add('pointer-events-none', 'filter', 'blur','overflow-x-hidden', 'h-[92vh]');
    }
};


const closeInfo = () => {
    const info = document.querySelector('.info_text');
    info.style.display = 'none';
};

const closeYellowTag = () => {
    let yellowTag = document.querySelector('.yellow_tag');
    yellowTag.classList.remove('opacity-100', 'pointer-events-auto');
    yellowTag.classList.add('opacity-0', 'pointer-events-none');
};
