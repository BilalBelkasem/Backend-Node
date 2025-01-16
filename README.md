# Final Fantasy API 

A Final Fantasy-themed ( once again like last year web advanced xD ) API built using **Node.js**, **Express**, and **MySQL**, designed for managing game-inspired data such as characters and items.

## Features
- CRUD functionality for characters and items.
- Pagination support for fetching large datasets.
- Designed to emulate a game-style API for educational or gaming projects.

---

## Prerequisites
Before setting up the project, ensure the following tools are installed:
- Node.js (v14 or higher recommended)
- MySQL

---

## Installation and Setup

### 1. Clone the Repository
git clone 
### 2. Install Dependencies
Run the following command to install all required Node.js packages:
npm install
### 3. Configure Environment Variables
Create a `.env` file in the root directory and provide your database credentials:
DB_NAME=FF
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_HOST=localhost
PORT=3000

### 4. Set Up the Database
1. Create the database:
   - Open MySQL and create a database named as specified in the `.env` file (`FF`).
2. Import the database schema:
   - Create tables based on database design (see **Data Models** below).

### 5. Start the Server
- For production: npm start
- For development with live reloading: npm run dev
---

## API Endpoints

### Characters Endpoints
- **GET `/models/characters`** - Retrieve all characters with optional pagination and filtering:
  - Query parameters:
    - `limit` (number): Maximum results per page.
    - `offset` (number): Starting index for results.
    - `name` (string): Filter by character name.
- **GET `/models/characters/:id`** - Retrieve a specific character by ID.
- **POST `/models/characters`** - Create a new character. Requires a JSON body with the character details.
- **PUT `/models/characters/:id`** - Update an existing character by ID.
- **DELETE `/models/characters/:id`** - Delete a character by ID.

### Items Endpoints
- **GET `/models/items`** - Retrieve all items with optional pagination and filtering:
  - Query parameters:
    - `limit` (number): Maximum results per page.
    - `offset` (number): Starting index for results.
    - `name` (string): Filter by item name.
    - `type` (string): Filter by item type (e.g., Weapon, Armor).
- **GET `/models/items/:id`** - Retrieve a specific item by ID.
- **POST `/models/items`** - Create a new item. Requires a JSON body with the item details.
- **PUT `/models/items/:id`** - Update an existing item by ID.
- **DELETE `/models/items/:id`** - Delete an item by ID.

---

## Data Models

### Character
{ "name": "string",
"job": "Warrior | Mage | Thief | White Mage | Black Mage | Dragoon",
"level": "number (1-99)",
"hp": "number (min: 1)",
"mp": "number (min: 0)" 
}

### Item
{ "name": "string",
"type": "Weapon | Armor | Accessory | Potion | Key Item",
"rarity": "number (1-5)",
"value": "number (min: 0)",
"description": "string"
}


---

## Technologies Used
- Node.js: Backend runtime for building server-side logic.
- Express: Framework for creating APIs.
- MySQL: Relational database for storing and managing data.
---
## Sources
- Node.js Documentation: For backend development guidance.
- Express Documentation: For building REST APIs.
- MySQL Documentation: For database management.

