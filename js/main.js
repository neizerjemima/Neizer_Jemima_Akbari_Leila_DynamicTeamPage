let teamButton =document.querySelectorAll('.img'),
    lightbox = document.querySelector('.lightbox');


const canvases = document.querySelectorAll('.progress-bar');
const texts = document.querySelectorAll('.progress-text');
const progresses = [0.35, 0.65, 0.77, 0.78]; // progress percentages between 0 and 1


function loadteamData() {
    // debugger;

    lightbox.querySelector('.profile').textContent = member[this.dataset.member].profile;
    lightbox.querySelector('.education').textContent = member[this.dataset.member].education;
    lightbox.querySelector('.skills').textContent = member[this.dataset.member].skills;
    lightbox.querySelector('.pro1 h3').textContent = member[this.dataset.member].skill_1;
    lightbox.querySelector('.pro2 h3').textContent = member[this.dataset.member].skill_2;
    lightbox.querySelector('.pro3 h3').textContent = member[this.dataset.member].skill_3;
    lightbox.querySelector('.pro4 h3').textContent = member[this.dataset.member].skill_4;
    lightbox.querySelector('#first_Date').textContent = member[this.dataset.member].first;
    lightbox.querySelector('#second_Date').textContent = member[this.dataset.member].second;
    lightbox.querySelector('#third_Date').textContent = member[this.dataset.member].third;
    lightbox.querySelector('#third_course').textContent = member[this.dataset.member].third_course;
    lightbox.querySelector('#second_course').textContent = member[this.dataset.member].second_course;
    lightbox.querySelector('#first_course').textContent = member[this.dataset.member].first_course;

    lightbox.style.display = 'block';
}


canvases.forEach((canvas, index) => {
  const context = canvas.getContext('2d');
  const progress = progresses[index];

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 40;
  const startAngle = 0;
  const endAngle = progress * 2 * Math.PI;

  // Draw background circle
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, 2 * Math.PI);
  context.strokeStyle = '#ddd';
  context.lineWidth = 10;
  context.stroke();

  // Draw progress arc
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.strokeStyle = '#BC8D0A';
  context.lineWidth = 10;
  context.stroke();

  // Update text
  texts[index].textContent = `${Math.round(progress * 100)}%`;
});;

teamButton.forEach(team => team.addEventListener('click', loadteamData));