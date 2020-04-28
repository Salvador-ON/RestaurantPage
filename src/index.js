import donutMenu from './donutMenu';
import home from './home';
import orderNow from './orderNow';

const navbar = () => {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';
  navbar.classList.add('navbar', 'navbar-light', 'bg-choco', 'font-weight-bold', 'text-pk');
  document.getElementById('content').appendChild(navbar);


  const name = document.createElement('a');
  name.classList.add('navbar-brand', 'text-pk', 'font-weight-bold', 'font-size-md');
  name.id = 'nav-text';
  name.href = '#';
  name.innerHTML = 'Donuts at Home';
  document.getElementById('navbar').appendChild(name);

  const icon1 = document.createElement('img');
  icon1.className = 'mx-2 donut-logo';
  icon1.src = 'https://www.seekpng.com/png/full/34-341786_donut-png-donut-clipart.png';
  document.getElementById('nav-text').appendChild(icon1);

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('d-flex', 'align-items-center');
  document.getElementById('navbar').appendChild(menu);

  const option1 = document.createElement('div');
  option1.id = 'o1';
  option1.innerHTML = 'Home';
  option1.onclick = () => { home(); };
  option1.classList.add('h4', 'mx-2', 'p-1', 'text-pk', 'btn-click', 'font-weight-bold', 'mb-0', 'rounded-pill');
  document.getElementById('menu').appendChild(option1);

  const option2 = document.createElement('div');
  option2.id = 'o2';
  option2.innerHTML = 'Menu';
  option2.onclick = () => { donutMenu(); };
  option2.classList.add('h4', 'mx-2', 'p-1', 'text-pk', 'btn-click', 'font-weight-bold', 'mb-0', 'rounded-pill');
  document.getElementById('menu').appendChild(option2);

  const option3 = document.createElement('div');
  option3.id = 'o3';
  option3.onclick = () => { orderNow(); };
  option3.innerHTML = 'Make your order';
  option3.classList.add('mx-2', 'h4', 'p-1', 'text-pk', 'btn-click', 'font-weight-bold', 'mb-0', 'rounded-pill');
  document.getElementById('menu').appendChild(option3);
};

const footer = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.className = ('fixed-bottom bg-pk py-2 d-flex justify-content-center align-items-center');
  document.getElementById('content').appendChild(footer);

  const icon1 = document.createElement('img');
  icon1.className = 'mx-2 donut-logo';
  icon1.src = 'https://www.seekpng.com/png/full/34-341786_donut-png-donut-clipart.png';
  document.getElementById('footer').appendChild(icon1);

  const name = document.createElement('span');
  name.id = 'name';
  name.innerText = 'Donuts at Home';
  name.className = ('h2 font-weight-bold text-choc pt-1');
  document.getElementById('footer').appendChild(name);

  const icon2 = document.createElement('i');
  icon2.id = 'icon2';
  icon2.className = ('mx-2 fas fa-home fa-2x text-choc');
  document.getElementById('footer').appendChild(icon2);
};

const centralContainer = () => {
  const centralCont = document.createElement('div');
  centralCont.id = 'centralCont';
  centralCont.classList.add('info-center', 'rounded');
  document.getElementById('content').appendChild(centralCont);
};

navbar();

centralContainer();

footer();

home();
