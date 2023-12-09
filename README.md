### Inventory Management System

**Project Name:** Book-Vault

**Website Link:** https://book-vault7.netlify.app/

Welcome to Book-Vault, a robust web application designed to streamline and
enhance the management capabilities of registered shops. This system provides
comprehensive control over products, discounts, categories, sales, invoice
generation, and more. It caters to three distinct user roles, each equipped with
specific functionalities to facilitate a seamless and efficient user experience.

## User Roles and Authorization

**System-Admin:**

- View all registered shops.
- Send notices to shop owners.
- Access detailed information about shops and their products.

**Shop-Manager:**

**Product Management**

- Add, manage, delete, view, and search products by name. _Offers and Coupon
  Management:_

- Add discounts to all products.
- Create coupons for a specified period. _Payment and Subscription:_

- Increase product adding limit through secure card payments. _Sale Collection:_

- View product tables, search products.
- Add products to the cart for the current customer.
- Mark sales as paid, generate invoices, and automatically update the database.
  _Sales Summary:_

- View total profit, total sales, and total investment of the shop.
- Access sales history. _Logged-User:_

- Register on the system. _Shop-Creation:_
- Create one shop.
- Become a shop-manager for an existing shop.

### Project Features

**User Authentication:**

- Secure user registration and login.
- JWT-based authentication for protected routes. _Shop Management:_

- Allow logged-in users to create a shop.
- Provide System-Admins with the ability to view and manage all registered
  shops. _Product Management:_

- Enable Shop-Managers to efficiently handle products with CRUD operations.
- Intuitive product search functionality. _Offers and Coupon Management:_

- Implement a straightforward system for adding discounts to products.
- Allow Shop-Managers to create time-bound coupons. _Payment and Subscription:_

- Integrate secure card payments for Shop-Managers to extend their product
  adding limit. _Sale Collection:_

- Provide Shop-Managers with tools to manage sales seamlessly.
- Real-time updates to the database upon successful transactions. _Sales
  Summary:_

- Generate detailed insights into the shop's performance.
- Historical data to track sales over time.

## Technologies Used:

- **Frontend:** JavaScript, TailwindCSS, React.js, Material Tailwind.
- **Server:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase, JWT (JSON Web Tokens)
