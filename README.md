# e-plantShopping 🌿

## Project Description
**e-plantShopping** is an e-commerce application (Single Page Application) built with React for exploring and simulating plant purchases. The project highlights the implementation of **Redux Toolkit** for robust, predictable, and scalable global state management, specifically focused on the shopping cart logic.

## Key Features
* **Dynamic Catalog:** Display of available plants with name, image, and price.
* **Cart Management (Redux):** * Add products to the cart (the store button automatically updates and disables once added to prevent duplication).
  * Increment or decrement item quantities directly from the cart view.
  * Completely remove products from the order.
* **Real-Time Calculations:** Instant updates of the item subtotal and the overall order total as quantities change.
* **Automated Deployment:** Native configuration with `gh-pages` for direct publishing.

## Architecture and Tech Stack
* **Frontend:** React.js
* **State Management:** Redux Toolkit (`CartSlice`, `useSelector`, `useDispatch`)
* **Build Tool:** Vite
* **Deployment:** GitHub Pages (`gh-pages`)

## Global State Logic (Store)
Cart management is centralized in a global `store`, ensuring a "Single Source of Truth" for all application components. The `reducer` actions include:
* `addItem`: Receives the product payload. Adds a new item or increments its quantity if it already exists.
* `removeItem`: Filters the current state and removes a specific product.
* `updateQuantity`: Overwrites the exact quantity of a specific product, allowing granular control from the `+` and `-` buttons.

## Local Installation and Execution for Testing (QA)

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/saherrera456-cell/e-plantShopping.git](https://github.com/saherrera456-cell/e-plantShopping.git)
