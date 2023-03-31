let teamButton =document.querySelectorAll('.img'),
    lightbox = document.querySelector('.lightbox');

function loadteamData() {
    // debugger;

    lightbox.querySelector('.profile').textContent = member[this.dataset.member].profile;
    lightbox.querySelector('.education').textContent = member[this.dataset.member].education;
    lightbox.querySelector('.leila_date').textContent = member[this.dataset.member].date;
    lightbox.querySelector('.leila-course').textContent = member[this.dataset.member].courses;

}

teamButton.forEach(team => team.addEventListener('click', loadteamData));