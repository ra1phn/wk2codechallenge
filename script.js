// Get references to DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingList = document.getElementById('shoppingList');

// Retrieve shopping list from localStorage or initialize as an empty array
let shoppingItems = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Function to render the shopping list in the DOM
function renderList() {
  // Clear the current list
  shoppingList.innerHTML = '';

  // Iterate over shopping items and create list elements
  shoppingItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;

    // Add 'purchased' class if the item is marked as purchased
    listItem.classList.toggle('purchased', item.purchased);

    // Add a click event to toggle the purchased state
    listItem.addEventListener('click', () => togglePurchased(index));

    // Create an Edit button for each item
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    // Add a click event to edit the item
    editButton.addEventListener('click', (e) => editItem(e, index));

    // Append the Edit button to the list item
    listItem.appendChild(editButton);

    // Append the list item to the shopping list
    shoppingList.appendChild(listItem);
  });
}

// Function to add a new item to the shopping list
function addItem() {
  // Get the trimmed value of the input field
  const newItem = itemInput.value.trim();

  // Check if the input is not empty
  if (newItem) {
    // Add the new item as an object to the shoppingItems array
    shoppingItems.push({ name: newItem, purchased: false });

    // Clear the input field
    itemInput.value = '';

    // Update localStorage and re-render the list
    updateLocalStorage();
    renderList();
  }
}

// Function to toggle the purchased state of an item
function togglePurchased(index) {
  // Toggle the purchased property of the item
  shoppingItems[index].purchased = !shoppingItems[index].purchased;

  // Update localStorage and re-render the list
  updateLocalStorage();
  renderList();
}

// Function to clear the entire shopping list
function clearList() {
  // Empty the shoppingItems array
  shoppingItems = [];

  // Update localStorage and re-render the list
  updateLocalStorage();
  renderList();
}

// Function to edit the name of an item
function editItem(event, index) {
  // Prevent the click event from propagating to the list item
  event.stopPropagation();

  // Prompt the user to enter a new name for the item
  const newName = prompt('Edit item:', shoppingItems[index].name);

  // If a new name is provided, update the item's name
  if (newName) {
    shoppingItems[index].name = newName.trim();

    // Update localStorage and re-render the list
    updateLocalStorage();
    renderList();
  }
}

// Function to update the shopping list in localStorage
function updateLocalStorage() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingItems));
}

// Add click event listeners to the Add and Clear buttons
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);

// Render the list initially to display saved items
renderList();
