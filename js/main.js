let teamButton =document.querySelectorAll('.img'),
    lightbox = document.querySelector('.lightbox');



function loadteamData() {
    // debugger;

    lightbox.querySelector('.profile').textContent = member[this.dataset.member].profile;
    lightbox.querySelector('.education').textContent = member[this.dataset.member].education;
    lightbox.querySelector('#first_Date').textContent = member[this.dataset.member].first;
    lightbox.querySelector('#second_Date').textContent = member[this.dataset.member].second;
    lightbox.querySelector('#third_Date').textContent = member[this.dataset.member].third;
    lightbox.querySelector('#third_course').textContent = member[this.dataset.member].third_course;
    lightbox.querySelector('#second_course').textContent = member[this.dataset.member].second_course;
    lightbox.querySelector('#first_course').textContent = member[this.dataset.member].first_course;

}

teamButton.forEach(team => team.addEventListener('click', loadteamData));