fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    const divProducts = document.querySelector('.wrapper');
    const products = data.products;
    products.forEach((el) => {
      const newDiv = document.createElement('div');
      const newDivCard = document.createElement('div');
      const newDivCardPicture = document.createElement('div');
      const newDivCardBody = document.createElement('div');
      const newDivText = document.createElement('p');
      const newH2 = document.createElement('h5');
      const divFooter = document.createElement('div');
      const price = document.createElement('span');
      const rating = document.createElement('span');
      const img = document.createElement('img');
      newH2.textContent = ` ${el.title}`;
      price.textContent = `Price: ${el.price}$`;
      rating.textContent = `Rating: ${el.rating}`;
      newDivText.textContent = `${el.description}`;
      img.setAttribute('src', el.thumbnail);
      newDiv.append(newDivCard);
      newDivCardPicture.append(img);
      newDivCard.append(newDivCardPicture);
      newDivCard.append(newDivCardBody);
      newDivCardBody.append(newH2);
      newDivCardBody.append(newDivText);
      divFooter.append(price);
      divFooter.append(rating);
      newDivCard.append(divFooter);
      divProducts.append(newDiv);
      newDivCardPicture.classList.add('newDivCardPicture');
      img.classList.add('image-size');
      newDiv.classList.add('col');
      newDivCard.classList.add('card', 'h-100');
      newDivCardBody.classList.add('card-body');
      newH2.classList.add('card-title');
      newDivText.classList.add('card-text');
      divFooter.classList.add('card-footer', 'd-flex', 'justify-content-between', 'divFooter');
    });
  });
