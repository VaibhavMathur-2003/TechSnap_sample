

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
    if (notification_dropDown.classList.contains('visible')) {
        notification_dropDown.classList.remove('visible');
        notification_dropDown.classList.add( 'hidden');
    } else {
        notification_dropDown.classList.remove('hidden');
        notification_dropDown.classList.add('visible');
    }
});

//-------------------------------------------------------------------------- 
const goalsSection = document.querySelector('.goals_DropDown');
const goalButton = document.querySelector('.points');

const goalsDrop = () => {
    if (goalsSection.classList.contains('visible')) {
        goalsSection.classList.remove('visible');
        goalsSection.classList.add( 'hidden');
    } else {
        goalsSection.classList.remove('hidden');
        goalsSection.classList.add('visible');
    }
};

const powerSection = document.querySelector('.power_dropDown');
const coinSection = document.querySelector('.coin_dropDown');

const powerhandler = () => {
    if (powerSection.classList.contains('visible')) {
        powerSection.classList.remove('visible');
        powerSection.classList.add( 'hidden');
    } else {
        powerSection.classList.remove('hidden');
        powerSection.classList.add('visible');
    }
};

const Coinhandler = () => {
    if (coinSection.classList.contains('visible')) {
        coinSection.classList.remove('visible');
        coinSection.classList.add( 'hidden');
    } else {
        coinSection.classList.remove('hidden');
        coinSection.classList.add('visible');
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
        powerSection.classList.remove('visible');
        powerSection.classList.add( 'hidden');
    }

    if (!isClickInsideCoin) {
        coinSection.classList.remove('visible');
        coinSection.classList.add( 'hidden');
    }

    if (!isClickInsideGoal && !isClickInsideGoalSection) {
        goalsSection.classList.remove('visible');
        goalsSection.classList.add( 'hidden');
    }

    if (!isClickInsideBell && !isClickInsideDropdown) {
        notification_dropDown.classList.remove('visible');
        notification_dropDown.classList.add( 'hidden');
    }
});

// ---------leaderboard data-----------------------
const slideMenu = () => {
    const sideMenu = document.querySelector('aside');
    const ham = document.querySelector('#ham_icon');
    const blurBack = document.querySelector('.max_width_holder');
    const blurBottom = document.querySelector('.bottombar');

    if (sideMenu.classList.contains('left-0')) {
        sideMenu.classList.remove('left-0');
        sideMenu.classList.add('-left-60');
        ham.src = 'https://img.icons8.com/android/96/000000/menu.png';
        blurBack.classList.remove('pointer-events-none', 'filter', 'blur');
        blurBack.classList.add('pointer-events-all', 'filter', 'blur-none');
        blurBottom.classList.remove('pointer-events-none', 'filter', 'blur');
        blurBottom.classList.add('pointer-events-all', 'filter', 'blur-none');
    } else {
        ham.src = 'https://img.icons8.com/material-outlined/24/000000/delete-sign.png';
        sideMenu.classList.remove('-left-60');
        sideMenu.classList.add('left-0', 'bottom-0');
        blurBack.classList.remove('pointer-events-all', 'filter', 'blur-none');
        blurBack.classList.add('pointer-events-none', 'filter', 'blur','overflow-x-hidden');
        blurBottom.classList.remove('pointer-events-all', 'filter', 'blur-none');
        blurBottom.classList.add('pointer-events-none', 'filter', 'blur','overflow-x-hidden');
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
