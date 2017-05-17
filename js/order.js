
  function updateOrder() {

    let subtotal = document.getElementById('subtotal');
    let tax = document.getElementById('tax');
    let total = document.getElementById('total');

    let subtotalValue = parseInt(0);
    let taxValue = parseInt(0);
    let totalValue = parseInt(0);

    let tableBody = document.getElementById('table-body');
    let burgerOrder = document.getElementById('burgerOrder');
    let pizzaOrder = document.getElementById('pizzaOrder');
    let ribsOrder = document.getElementById('ribsOrder');
    let iceCreamOrder = document.getElementById('iceCreamOrder');

    let placeOrder = document.getElementById('place-order');
    let customerName = document.getElementById('customer-name');
    let nameValue;
    let customerTel = document.getElementById('customer-tel');
    let telValue;
    let customerAddress = document.getElementById('customer-address');
    let addressValue;

    let burgerPrice = 8.99;
    let pizzaPrice = 11.99;
    let ribsPrice = 14.99;
    let iceCreamPrice = 7.99;
    let numberOfItems = 0;

    burgerOrder.addEventListener('click', function() {
      let newRow = document.createElement('tr');
      let newItem = document.createElement('td');
      let newPrice = document.createElement('td');
      tableBody.appendChild(newRow);
      newRow.appendChild(newItem).textContent = 'Royale with Cheese';
      newRow.appendChild(newPrice).textContent = `$${burgerPrice}`;
      subtotalValue += burgerPrice;
      taxValue = subtotalValue * 0.1;
      totalValue = subtotalValue + taxValue;
      subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
      tax.textContent = `$${taxValue.toFixed(2)}`;
      total.textContent = `$${totalValue.toFixed(2)}`;
      numberOfItems++;
    })

    pizzaOrder.addEventListener('click', function() {
      let newRow = document.createElement('tr');
      let newItem = document.createElement('td');
      let newPrice = document.createElement('td');
      tableBody.appendChild(newRow);
      newRow.appendChild(newItem).textContent = 'Arugula Pie';
      newRow.appendChild(newPrice).textContent = `$${pizzaPrice}`;
      subtotalValue += pizzaPrice;
      taxValue = subtotalValue * 0.1;
      totalValue = subtotalValue + taxValue;
      subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
      tax.textContent = `$${taxValue.toFixed(2)}`;
      total.textContent = `$${totalValue.toFixed(2)}`;
      numberOfItems++;
    })

    ribsOrder.addEventListener('click', function() {
      let newRow = document.createElement('tr');
      let newItem = document.createElement('td');
      let newPrice = document.createElement('td');
      tableBody.appendChild(newRow);
      newRow.appendChild(newItem).textContent = 'Smoked Swine';
      newRow.appendChild(newPrice).textContent = `$${ribsPrice}`;
      subtotalValue += ribsPrice;
      taxValue = subtotalValue * 0.1;
      totalValue = subtotalValue + taxValue;
      subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
      tax.textContent = `$${taxValue.toFixed(2)}`;
      total.textContent = `$${totalValue.toFixed(2)}`;
      numberOfItems++;
    })

    iceCreamOrder.addEventListener('click', function() {
      let newRow = document.createElement('tr');
      let newItem = document.createElement('td');
      let newPrice = document.createElement('td');
      tableBody.appendChild(newRow);
      newRow.appendChild(newItem).textContent = 'Ice Cream Biscuit';
      newRow.appendChild(newPrice).textContent = `$${iceCreamPrice}`;
      subtotalValue += iceCreamPrice;
      taxValue = subtotalValue * 0.1;
      totalValue = subtotalValue + taxValue;
      subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
      tax.textContent = `$${taxValue.toFixed(2)}`;
      total.textContent = `$${totalValue.toFixed(2)}`;
      numberOfItems++;
    })

    placeOrder.addEventListener('click', function(event) {
      event.preventDefault();
      let nameValue = customerName.value;
      let telValue = customerTel.value;
      let addressValue = customerAddress.value;

      if (nameValue !== '' && telValue !== '' && addressValue !== '' && numberOfItems !== 0) {
        let $danger = $('#danger');
        let $success = $('#success');
        $success.show();
        $danger.hide();
      } else {
        let $danger = $('#danger');
        let $success = $('#success');
        $danger.show();
        $success.hide();
      }

    });

  }

  // This is an Init function which will fire when the page loads.
  (function init() {
    updateOrder();
  })();
