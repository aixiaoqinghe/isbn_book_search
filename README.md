# isbn_book_search
A web application to search book information by ISBN,built with HTML,CSS and JavaScript,integrating third-party API for real-time book data retrival.

## Features
- **ISBN Query**: Enter a valid 13-digit ISBN to get detailed book information.
- **Real-time Data**: Fetches the latest book data via Chuanzhi Education's API.
- **Note on API Limits**: The API has a **request frequency limit** (check Chuanzhi Education's official documentation for details).

## Tech Stack
- **HTML**: For structuring the web page.
- **CSS**: For styling and layout.
- **JavaScript**: For interactive logic and API communication.

## How to Get the API
To use this tool, you need to obtain an API key from Chuanzhi Education and configure it in your project:
1. **Visit the Developer Platform**  
   Go to [Chuanzhi Education's Official Developer Portal](https://api.chuanzhi.com) (replace with the actual URL provided by Chuanzhi Education).
2. **Register and Apply for API Access**  
   - Create an account on the portal.  
   - Navigate to the "API Services" section and apply for the "ISBN Book Search" API.  
   - Once approved, you will receive an **API key** (a unique string for authenticating your requests).
3. **Configure the API Key in Your Code**  
   Open the `script.js` file in your project and locate the section where the API request is made. Replace the placeholder `your_api_key_here` with the API key you obtained:
   ```javascript
   // Example code snippet in script.js
   const apiKey = "your_api_key_here"; // Replace with your actual API key from Chuanzhi Education
   const apiUrl = `https://api.chuanzhi.com/book/isbn?key=${apiKey}&isbn=...`;
4.**Note on API Limits**
The Chuanzhi Education API has a request limit (e.g., 10 requests their official documentation for exact numbers),by the way,it is free to use. Exceeding this limit will result in temporary API unavailability.If you want to get more request,you need to pay.


## How to Use
1. Open `index.html` in a web browser.
2. Enter a valid 13-digit ISBN in the input field.
3. Click the "Search" button to retrieve book information.

## Project Structure
