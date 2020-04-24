function navbar() {
  document.getElementById("content").innerHTML = "";
  let navbar = document.createElement('nav');
  navbar.id= 'navbar';
  navbar.classList.add('navbar', 'navbar-light', 'bg-choco');
  document.getElementById("content").appendChild(navbar);
  let name = document.createElement('a');
  name.classList.add('navbar-brand', 'text-white');
  name.href='#';
  name.innerHTML='Donuts at Home'
  document.getElementById("navbar").appendChild(name);

  let menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('d-flex');
  document.getElementById("navbar").appendChild(menu);

  let option1= document.createElement('div');
  option1.id = 'o1';
  option1.innerHTML='Home'
  option1.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option1);

  let option2= document.createElement('div');
  option2.id = 'o2';
  option2.innerHTML='Menu'
  option2.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option2);

  let option3= document.createElement('div');
  option3.id = 'o3';
  option3.innerHTML='Make your order'
  option3.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option3);
}

navbar()