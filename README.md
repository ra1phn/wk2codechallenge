# wk2codechallenge# Interactive Shopping List

This project is a simple, interactive shopping list application that allows users to add, edit, mark as purchased, and clear items from the list. It also features persistence using the browser's localStorage, ensuring that the list remains intact even after the page is reloaded.

## Project Structure

```
project-root/
├── index.html    # The main HTML file for the shopping list
├── styles.css    # Stylesheet to style the shopping list and its elements
├── script.js     # JavaScript file containing the logic for item addition, editing, marking, and clearing
└── README.md     # Documentation for the project
```

---

## Features

- **Add Items**: Users can add new items to the list.
- **Mark as Purchased**: Click on an item to mark it as purchased. Purchased items have a line-through and a different background color.
- **Edit Items**: Users can edit the name of any existing item.
- **Clear List**: Users can clear the entire shopping list.
- **Persistence**: The list is saved in the browser's `localStorage` so it is retained even after refreshing the page.

---

## How to Run

1. Clone or download the project files.
2. Open the `index.html` file in a web browser.

---

## Usage

1. **Add Items**:
   - Type the item name in the input field.
   - Click the `Add` button to add it to the list.

2. **Mark Items as Purchased**:
   - Click on an item to toggle its purchased status.

3. **Edit Items**:
   - Click the `Edit` button next to an item and enter the new name when prompted.

4. **Clear List**:
   - Click the `Clear List` button to remove all items from the list.

---

## File Breakdown

### `index.html`
- Contains the basic structure of the page, including the input field, buttons, and the unordered list for the shopping items.

### `styles.css`
- Defines the appearance of the shopping list items, buttons, and input fields.
- Styles for purchased items include a line-through and a light green background.

### `script.js`
- Handles all the logic of the application, including:
  - Adding new items.
  - Toggling the purchased status of items.
  - Editing item names.
  - Clearing the entire list.
  - Storing and retrieving the list from localStorage.

---

## Customization

You can customize the following parts of the app:

- **Styles**: Modify `styles.css` to change the look and feel of the app.
- **Features**: You can add new features like item categories, due dates, or more.

---

## Technologies Used

- **HTML**: Structure of the app.
- **CSS**: Styling of the app.
- **JavaScript**: Logic and interactivity, including DOM manipulation and localStorage.

---

## Possible Improvements

- **Drag-and-Drop Sorting**: Allow users to reorder items.
- **Custom Categories**: Group items by categories.
- **Due Dates**: Allow users to set due dates for items.

---

## Author
This project was created as part of a code challenge to practice array iteration, DOM manipulation, and event handling.

---

## License
This project is open-source and free to use.

