const heroWrapper = document.querySelector('.wrapper');

const moveBtn = (e) => {
  const heroBtn = document.querySelector('.hero__btn');
  if (!e[0].isIntersecting) {
    heroBtn.classList.add('floating');
  }
  if (e[0].isIntersecting) {
    heroBtn.classList.remove('floating');
  }
}

const moveBtnIntersectionObs = new IntersectionObserver(moveBtn);
moveBtnIntersectionObs.observe(heroWrapper);
