/* Add your Application JavaScript */

const confettiButton = document.querySelector('.confettiButton');
const confettiContainer = document.querySelector('#confettiContainer');

confettiButton.addEventListener('click', function () {
    document.getElementById('sound').play();
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.floor(Math.random() * 100)}vw`;
        confetti.style.top = `${Math.floor(Math.random() * 100)}vh`;
        confetti.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        confetti.style.animation = `confettiFall ${Math.random() + 3}s ease-out`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
});

