
# Excel to JSON Converter

## Author: Anthony Woodworth

### Date: February 12, 2024

## Overview

This script establishes a basic Express server capable of handling POST requests at the `/read` endpoint. It is designed to receive an Excel file within the request, convert this file into JSON format, and return the JSON data as the response. The script ensures robust error handling by returning appropriate HTTP status codes for errors or in cases where no file is uploaded.

## Prerequisites

To run this script, you will need:

- **Node.js**: Necessary for installing dependencies and executing the script.
- **A REST API Client**: For sending requests to the server and viewing the responses. Recommended options include:
  - [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) (VSCode Extension)
  - [Postman](https://www.postman.com/) (Stand-alone service)

## Setup and Execution

1. **Install Dependencies**: Ensure Node.js is installed on your system and use it to install any required dependencies for the script.
2. **Run the Server**: Start the Express server script. Ensure it's listening for incoming POST requests at the `/read` endpoint.
3. **Send a Request**: Use a REST API client of your choice to send a POST request containing an Excel file to the server.
4. **Receive Response**: The server will process the Excel file and return the content in JSON format as the response.
5. **Thunder Client (request setup)**: Start a new request. Go to the body section for your request. Use the Form option for your body. Press files then a field will show up. Then you want to give the field name a value of 'file' (as expected in our script) then send that biddy

## Additional Information

- The script has been tested with Thunder Client, a lightweight REST API client that integrates seamlessly with VSCode. However, you are free to use any REST API client, such as Postman, according to your preference.
