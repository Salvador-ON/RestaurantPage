const home = () => {
  document.getElementById('centralCont').innerHTML = '';
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Donuts at Home';
  title.classList.add('h1', 'text-center', 'text-pk2', 'pt-2');
  document.getElementById('centralCont').appendChild(title);

  const paragraph1 = document.createElement('p');
  paragraph1.id = 'home-p1';
  paragraph1.innerHTML = 'Fresh and delicious food has always been our goal. From our Original Glazed Doughnut, to our signature coffee, baked goods, and specialty drinks, we have been offering a one of kind taste experience to our customers for over 2 years.';
  paragraph1.classList.add('text-white', 'h4', 'text-center', 'px-4', 'py-4');
  document.getElementById('centralCont').appendChild(paragraph1);

  const paragraph2 = document.createElement('p');
  paragraph2.id = 'home-p2';
  paragraph2.innerHTML = 'You dont need to go out!';
  paragraph2.classList.add('text-white', 'h1', 'text-center', 'px-3', 'py-4');
  document.getElementById('centralCont').appendChild(paragraph2);

  const paragraph3 = document.createElement('p');
  paragraph3.id = 'home-p3';
  paragraph3.innerHTML = 'Just call us. Make your Order and Wait in your home until we arrive.';
  paragraph3.classList.add('text-white', 'h2', 'text-center', 'px-3', 'py-4');
  document.getElementById('centralCont').appendChild(paragraph3);
};

export default home;
