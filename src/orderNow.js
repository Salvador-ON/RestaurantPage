const orderNow = () => {
  document.getElementById('centralCont').innerHTML = '';
  const title = document.createElement('h1');
  title.id = 'orderTitle';
  title.innerHTML = 'Make your Order';
  title.className = 'h1 text-center text-pk2 pt-2';
  document.getElementById('centralCont').appendChild(title);

  const paragraph1 = document.createElement('p');
  paragraph1.id = 'oder-p1';
  paragraph1.innerHTML = 'Send us a WhatsApp Message or Call us.';
  paragraph1.className = 'text-white h2 text-center px-4 py-4';
  document.getElementById('centralCont').appendChild(paragraph1);

  const paragraph2 = document.createElement('p');
  paragraph2.id = 'order-p2';
  paragraph2.className = 'text-pk2 h1 text-center py-4 px-3';
  document.getElementById('centralCont').appendChild(paragraph2);

  const icon = document.createElement('i');
  icon.id = 'icon-p2';
  icon.className = 'fas fa-phone-square-alt mx-2 text-pk2';
  document.getElementById('order-p2').appendChild(icon);

  const span = document.createElement('ispan');
  span.id = 'span-p2';
  span.innerText = '811-574-8659';
  document.getElementById('order-p2').appendChild(span);

  const paragraph3 = document.createElement('p');
  paragraph3.id = 'order-p3';
  paragraph3.innerHTML = 'You can pay with Debit, Credit Card or Cash';
  paragraph3.className = ('text-white h2 text-center py-4 px-3');
  document.getElementById('centralCont').appendChild(paragraph3);
};

export default orderNow;
