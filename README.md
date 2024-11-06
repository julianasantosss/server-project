# Web API Interaction - Project Overview

In this project, you'll be **building and exporting methods** to interact with a **Web API** that provides a **JSON** database containing user information. Each user in the database has a unique **ID number**, along with a **First Name**, **Last Name**, and **email address**. We’ll be working with the `json-server` npm module to simulate a server environment and manage user data.

## Project Tasks and Methods

You’ll be writing methods to carry out each of the following actions with the `json-server` database:

### 1. `getServerURL()`
   - **Purpose**: This method will **return the URL** of your JSON server.
   - **How It Works**: Simply run this function to receive the URL for your server instance. This URL will be used in other methods to interact with the database.

### 2. `listUsers()`
   - **Purpose**: Print a list of **all users** from the JSON server database.
   - **How It Works**: This method fetches and logs the **entire user list** from the server to the console. It’s a simple way to view all user data available in the JSON database at once.

### 3. `addUser(first_name, last_name, email)`
   - **Purpose**: Add a new user to the JSON server database.
   - **How It Works**: This method will take three parameters – `<first_name>`, `<last_name>`, and `<email>`. It will then assign the new user a unique ID (sequential to the last existing user ID) and store the user data on the JSON server.

### 4. `delUser(id)`
   - **Purpose**: Delete an existing user from the JSON server database.
   - **How It Works**: When provided with an `<id>`, this method will delete the user with the matching ID from the server database.

---
  
> **NOTE**: Ensure `json-server` is installed and running so that each method can properly interact with the server.
