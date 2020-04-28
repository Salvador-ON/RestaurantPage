const donutMenu = () => {
  document.getElementById('centralCont').innerHTML = '';
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Donut Price $5.25';
  title.classList.add('h1', 'text-center', 'text-pk2', 'pt-2');
  document.getElementById('centralCont').appendChild(title);

  const menuCont = document.createElement('div');
  menuCont.id = 'menuCont';
  menuCont.classList.add('mx-4', 'd-flex', 'flex-wrap', 'justify-content-center', 'pt-2');
  document.getElementById('centralCont').appendChild(menuCont);

  const links = [
    ['https://krispykreme.ca/wp-content/uploads/2013/10/OriginalGlazed_OG_Overhead_2017-300x300.png', 'glazed', 'ORIGINAL'],
    ['https://krispykreme.ca/wp-content/uploads/2020/01/Strawberry-Iced-with-Sprinkles-Ring-Overhead-0110B-300x300.png', 'glazed', 'STRAWBERRY'],
    ['https://krispykreme.ca/wp-content/uploads/2013/08/Choc-Iced-Ring-Doughnut-sprinkles-Overhead-0198-300x300.png', 'choco-sprinks', 'CHOCO-SPRINK'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Choc-Iced-Ring-Doughnut-Overhead-0195-1-300x300.png', 'chocolate', 'CHOCOLATE'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Chocolate-Cake-Doughnut-Overhead-0419-300x300.png', 'GLAZED CHOCOLATE CAKE', 'CHOCOCAKE'],
    ['https://krispykreme.ca/wp-content/uploads/2020/01/Chocolate-Iced-Raspberry-Filled-Overhead-0823-300x300.png', 'CHOCOLATE ICED RASPBERRY FILLED', 'RASPBERRY'],
    ['https://krispykreme.ca/wp-content/uploads/2020/01/Oreo-Cookies-and-Kreme-Overhead-0815-300x300.png', 'OREO COOKIES AND KREME', 'OREO-COOKIES'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Sugar-Ring-Overhead-0100-300x300.png', 'SUGAR', 'SUGAR'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Cinnamon-Apple-Filled-Overhead-0852-300x300.png', 'cinamon', 'CINNA-APPLE'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Caramel-Kreme-Crunch-Overhead-0868-300x300.png', 'caramel', 'CARAMEL'],
    ['https://krispykreme.ca/wp-content/uploads/2020/01/New-York-Cheesecake-Overhead-0861-300x300.png', 'cheesecake', 'CHEESECAKE'],
    ['https://krispykreme.ca/wp-content/uploads/2013/10/Glazed-Lemon-Filled-Doughnut-Overhead-0645-300x300.png', 'lemon-fill', 'LEMON-FILL']];
  links.forEach((link) => {
    const [urlLink, altText, titleText] = link;
    const donutCont = document.createElement('div');
    donutCont.id = titleText;
    donutCont.classList.add('donut-cont', 'mx-2', 'd-flex', 'justify-content-center', 'flex-column', 'text-white', 'font-weight-bold');
    document.getElementById('menuCont').appendChild(donutCont);

    const imageDonut = document.createElement('img');
    imageDonut.src = urlLink;
    imageDonut.className = 'donut mx-auto';
    imageDonut.alt = altText;
    document.getElementById(titleText).appendChild(imageDonut);

    const paraDonut = document.createElement('p');
    paraDonut.className = 'text-center';
    paraDonut.innerText = titleText;
    document.getElementById(titleText).appendChild(paraDonut);
  });
};

export default donutMenu;
