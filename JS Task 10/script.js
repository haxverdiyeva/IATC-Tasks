const products = document.getElementById('products');
const cart = document.getElementById('cart');

async function getProducts() {
try {
	const response = await fetch('https://fakestoreapi.com/products');

	if (response.status !== 200) {
		throw new Error('No data');
	}

	const products = await response.json();

	return {
		error: null,
		data: products,
	};
} catch (error) {
	return {
		error: error.message,
		data: [],
	};
}
}

function renderProducts() {
const result = getProducts();

result.then(({ data, error }) => {
	if (error) {
		products.innerHTML = `<h2>${error}</h2>`;
	}

	const fragment = document.createDocumentFragment();

	data.forEach((product) => {
		const productItem = document.createElement('div');
		productItem.classList.add('product__item');
		productItem.dataset.id = product.id;
		productItem.innerHTML = `
	<div class="cart_image">
	  <img src="${product.image}" alt="${product.title}">
	</div>
	<div class="product__body">
	  <h2>${product.title}</h2>
	  <p>${product.description}</p>
	  <p class="product__price">
		<span>Price:</span>
		<span>${product.price}</span>
		<span>₼</span>
	  </p>
	  <p class="product__category">
		<span>Category:</span>
		<span>${product.category}</span>
	  </p>
	  <p class="product__rating">
		<span>Rating:</span>
		<span>${product.rating.rate}</span>
		<span>(${product.rating.count})</span>
	  </p>
	</div>
  `;
		fragment.appendChild(productItem);
	});

	products.appendChild(fragment);
});
}


renderProducts();

products.addEventListener('click', findClickedProduct);

function findClickedProduct(event) {
  const target = event.target;
  const productItem = target.closest('.product__item');

  if (productItem) {
	const productId = productItem.dataset.id;

	const data = getData('cartData') || {};

	if (data[productId]) {
	  data[productId] += 1;
	} else {
	  data[productId] = 1;
	}

	saveData('cartData', data);

	addCart(data);
  }
}
function saveData(key, value) {
  const JSONstring = JSON.stringify(value);
  localStorage.setItem(key, JSONstring);
}

function getData(key) {
  const JSONstring = localStorage.getItem(key);
  const data = JSON.parse(JSONstring);
  return data;
}

async function addCart(data) {
  const cartContainer = document.getElementById('cartContainer');
  cartContainer.innerHTML = '';

  const fragmentCart = document.createDocumentFragment();

  for (const [productId, quantity] of Object.entries(data)) {
	const product = await getProductById(productId);

	if (product) {
	  const cartIt = document.createElement('div');
	  cartItem.classList.add('product_cart');
	  cartItem.dataset.id = product.id;
	  cartItem.innerHTML = `
		<div class="cart_image">
		  <img src="${product.image}" alt="${product.title}">
		</div>
		<div class="product__body">
		  
			<h2>${product.title}</h2>
		  
		  
			<p class="product__price">
			  <span>Price:</span>
			  <span>${product.price * quantity}</span>
			  <span>₼</span>
			</p>
		  
		  
			<p class="product__quantity">
			  <span>Quantity:</span>
			  <span>${quantity}</span>
			</p>
		  
		</div>
	  `;
	  fragmentCart.appendChild(cartItem);
	}
  }

  cart.appendChild(fragmentCart);
}


async function getProductById(productId) {
  try {
	const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

	if (response.status !== 200) {
	  throw new Error('No data');
	}

	const product = await response.json();
	return product;
  } catch (error) {
	console.error(error);
	return null;
  }
}