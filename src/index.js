function navbar() {
  document.getElementById("content").innerHTML = "";
  let navbar = document.createElement('nav');
  navbar.id = 'navbar';
  navbar.classList.add('navbar', 'navbar-light', 'bg-choco');
  document.getElementById("content").appendChild(navbar);
  let name = document.createElement('a');
  name.classList.add('navbar-brand', 'text-white');
  name.href = '#';
  name.innerHTML = 'Donuts at Home'
  document.getElementById("navbar").appendChild(name);

  let menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('d-flex');
  document.getElementById("navbar").appendChild(menu);

  let option1 = document.createElement('div');
  option1.id = 'o1';
  option1.innerHTML = 'Home';
  option1.onclick = function () { home(); };
  option1.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option1);

  let option2 = document.createElement('div');
  option2.id = 'o2';
  option2.innerHTML = 'Menu';
  option2.onclick = function () { donutMenu(); };
  option2.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option2);

  let option3 = document.createElement('div');
  option3.id = 'o3';
  option3.innerHTML = 'Make your order';
  option3.classList.add('mx-2', 'p-3', 'text-white', 'btn-click');
  document.getElementById("menu").appendChild(option3);
}

function footer(){
  
}

function centralContainer() {

  let centralCont = document.createElement('div');
  centralCont.id = 'centralCont';
  centralCont.classList.add('info-center', 'rounded');
  document.getElementById("content").appendChild(centralCont);

}

function home() {
  document.getElementById("centralCont").innerHTML = "";
  let title = document.createElement('h1');
  title.id = "title";
  title.innerHTML = 'Donuts at Home';
  title.classList.add('h1', 'text-center', 'text-white', 'pt-2');
  document.getElementById("centralCont").appendChild(title);

  let paragraph1 = document.createElement('p');
  paragraph1.id = "home-p1";
  paragraph1.innerHTML = 'Fresh and delicious food has always been our goal. From our Original Glazed Doughnut, to our signature coffee, baked goods, and specialty drinks, we have been offering a one of kind taste experience to our customers for over 2 years.';
  paragraph1.classList.add('text-white', 'h4', 'text-center', 'px-4', 'py-4');
  document.getElementById("centralCont").appendChild(paragraph1);

  let paragraph2 = document.createElement('p');
  paragraph2.id = "home-p2";
  paragraph2.innerHTML = 'You dont need to go out!';
  paragraph2.classList.add('text-white', 'h1', 'text-center', 'px-3', 'py-4');
  document.getElementById("centralCont").appendChild(paragraph2);

  let paragraph3 = document.createElement('p');
  paragraph3.id = "home-p3";
  paragraph3.innerHTML = 'Just call us. Make your Order and Wait in your home until we arrive.';
  paragraph3.classList.add('text-white', 'h2', 'text-center', 'px-3', 'py-4');
  document.getElementById("centralCont").appendChild(paragraph3);
}

function donutMenu() {
  document.getElementById("centralCont").innerHTML = "";
  let title = document.createElement('h1');
  title.id = "title";
  title.innerHTML = 'Any Donut $5.25';
  title.classList.add('h1', 'text-center', 'text-white', 'pt-2');
  document.getElementById("centralCont").appendChild(title);

  let menuCont = document.createElement('div');
  menuCont.id = "menuCont";
  menuCont.classList.add('mx-4', 'd-flex', 'flex-wrap', 'justify-content-center', 'pt-2');
  document.getElementById("centralCont").appendChild(menuCont);

  const links = [
    ["https://krispykreme.ca/wp-content/uploads/2013/10/OriginalGlazed_OG_Overhead_2017-300x300.png", "glazed", 'ORIGINAL'],
    ["https://krispykreme.ca/wp-content/uploads/2020/01/Strawberry-Iced-with-Sprinkles-Ring-Overhead-0110B-300x300.png", "glazed", 'STRAWBERRY'],
    ["https://krispykreme.ca/wp-content/uploads/2013/08/Choc-Iced-Ring-Doughnut-sprinkles-Overhead-0198-300x300.png", "choco-sprinks", 'CHOCO-SPRINK'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Choc-Iced-Ring-Doughnut-Overhead-0195-1-300x300.png", 'chocolate', 'CHOCOLATE'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Chocolate-Cake-Doughnut-Overhead-0419-300x300.png", "GLAZED CHOCOLATE CAKE", 'CHOCOCAKE'],
    ["https://krispykreme.ca/wp-content/uploads/2020/01/Chocolate-Iced-Raspberry-Filled-Overhead-0823-300x300.png", "CHOCOLATE ICED RASPBERRY FILLED", 'RASPBERRY'],
    ["https://krispykreme.ca/wp-content/uploads/2020/01/Oreo-Cookies-and-Kreme-Overhead-0815-300x300.png", "OREO COOKIES AND KREME", 'OREO-COOKIES'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Sugar-Ring-Overhead-0100-300x300.png", "SUGAR", 'SUGAR'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Cinnamon-Apple-Filled-Overhead-0852-300x300.png", "cinamon", 'CINNA-APPLE'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Caramel-Kreme-Crunch-Overhead-0868-300x300.png", "caramel", 'CARAMEL'],
    ["https://krispykreme.ca/wp-content/uploads/2020/01/New-York-Cheesecake-Overhead-0861-300x300.png", "cheesecake", 'CHEESECAKE'],
    ["https://krispykreme.ca/wp-content/uploads/2013/10/Glazed-Lemon-Filled-Doughnut-Overhead-0645-300x300.png",'lemon-fill','LEMON-FILL']];
  links.forEach(link => {
    console.log(link[0], link[1], link[2]);

    let donutCont = document.createElement('div');
    donutCont.id = link[2];
    donutCont.classList.add('donut-cont', 'mx-2', 'd-flex', 'justify-content-center', 'flex-column');
    document.getElementById("menuCont").appendChild(donutCont);

    let imageDonut = document.createElement('img');
    imageDonut.src = link[0];
    imageDonut.className = 'donut mx-auto';
    imageDonut.alt = link[1];
    document.getElementById(link[2]).appendChild(imageDonut);

    let paraDonut = document.createElement('p');
    paraDonut.className = 'text-white text-center';
    paraDonut.innerText = link[2];
    document.getElementById(link[2]).appendChild(paraDonut);
  });
}




navbar();

centralContainer();

home();


