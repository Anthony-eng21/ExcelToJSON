 #Excel To JSON
 ##Author: Anthony Woodworth
 * 
 ##Date: feb 12, 2024
 ##To Run: 
 * You need Node.js to install dependencies and run this and a Rest API Client
 * To get the response body can use this vscode extension called 'Thunder Client' or you can use a Service like PostMan.

 ##Description:
 * This script sets up a simple Express server that listens for POST requests on the /read endpoint, 
 * expecting an Excel file as part of the request. It then converts the Excel file to JSON format and 
 * returns the JSON data in the response. If any errors occur or if no 
 * file is uploaded, it sends the appropriate HTTP status code in the response.

 ##Extras:
 * I used the thunder client, a lightweight rest api vscode extension to get 
 * back the response but you could also use postman if you want.
