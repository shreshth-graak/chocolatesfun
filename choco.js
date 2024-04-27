// Define an array of chocolate products
const chocolateProducts = [
    { id: 1, name: 'Milk Chocolate', price: 2.99 },
    { id: 2, name: 'Dark Chocolate', price: 3.49 },
    { id: 3, name: 'White Chocolate', price: 2.79 },
    { id: 4, name: 'Hazelnut Chocolate', price: 3.99 },
    { id: 5, name: 'Caramel Chocolate', price: 2.99 },
    { id: 6, name: 'Almond Chocolate', price: 3.49 },
    { id: 7, name: 'Peanut Butter Chocolate', price: 2.79 },
    { id: 8, name: 'Coconut Chocolate', price: 3.29 }
  ];
  
  const productContainer = document.querySelector('.product-container');
  const selectedItemsList = document.querySelector('.selected-items');
  const totalItems = document.querySelector('.total-items');
  const totalPrice = document.querySelector('.total-price');
  
  let selectedProducts = [];
  
  // Render chocolate products
  function renderProducts() {
    productContainer.innerHTML = '';
    chocolateProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="add-to-bundle" data-id="${product.id}">Add to Bundle</button>
      `;
      productContainer.appendChild(productDiv);
    });
  
    const addToBundleButtons = document.querySelectorAll('.add-to-bundle');
    addToBundleButtons.forEach(button => {
      button.addEventListener('click', handleAddToBundle);
    });
  }
 
 // Handle adding a product to the bundle
function handleAddToBundle(event) {
    const productId = event.target.dataset.id;
    const product = chocolateProducts.find(p => p.id === parseInt(productId));
  
    if (selectedProducts.length < 8) {
      
     
        selectedProducts.push(product);
        renderSelectedItems();
        calculateTotals();
      
    } 
    else {
      alert('You cannot add more than 8 items to your bundle.');
    }
  }
  // Render selected items in the bundle summary
  function renderSelectedItems() {
    selectedItemsList.innerHTML = '';
    selectedProducts.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price}`;
      selectedItemsList.appendChild(li);
    });
  }
  
  // Calculate total items and total price
  function calculateTotals() {
    totalItems.textContent = selectedProducts.length;
    totalPrice.textContent = selectedProducts.reduce((sum, product) => sum + product.price, 0).toFixed(2);
  }
  
  // Initialize the application
  renderProducts();