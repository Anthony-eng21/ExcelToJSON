/**
 * author: Anthony Woodworth
 * 
 * date: feb 12, 2024
 * 
 * Description:
 * This script sets up a simple Express server that listens for POST requests on the /read endpoint, 
 * expecting an Excel file as part of the request. It then converts the Excel file to JSON format and 
 * returns the JSON data in the response. If any errors occur or if no 
 * file is uploaded, it sends the appropriate HTTP status code in the response.
 * 
 * Extras:
 * I used the thunder client, a lightweight rest api vscode extension to get 
 * back the response but you could also use postman if you want.
 */

// Require necessary Node.js modules
const express = require('express'); // Express framework for handling HTTP requests
const multer = require('multer'); // Middleware for handling multipart/form-data, primarily used for uploading files
const excelToJson = require('convert-excel-to-json'); // Module to convert Excel files to JSON format
const fs = require('fs-extra'); // Enhanced version of the filesystem module, with additional methods and simpler syntax

// Initialize an Express application
const app = express();
const port = 3000; // Set the port for the server to listen on

// Configure multer for file uploads, specifying the upload directory
var upload = multer({ dest: "uploads/" });

// Define a POST route for reading Excel files
app.post("/read", upload.single("file"), (req, res) => {
    try {
        // Check if a file has been uploaded successfully
        if (req.file?.filename == null || req.file?.filename == 'undefined') {
            // If no file is uploaded, return a 400 Bad Request error
            res.status(400).json("no file")
        } else {
            // Construct the file path from the uploads directory and the uploaded file's name
            var filePath = "uploads/" + req.file.filename;

            // Convert the uploaded Excel file to JSON format
            const excelData = excelToJson({
                sourceFile: filePath,
                header: {
                    rows: 1, // Specify that the first row contains column headers
                },
                columnToKey: {
                    "*": "{{columnHeader}}" // Map all columns to JSON using their header names
                }
            });
            
            // Remove the uploaded file after conversion to clean up the upload directory
            fs.remove(filePath);
            // Send the converted JSON data back with a 200 OK response
            res.status(200).json(excelData);
        }
    } catch (err) {
        // In case of any errors, send a 500 Internal Server Error response
        res.status(500);
    }
});

// Start the Express server on the specified port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
