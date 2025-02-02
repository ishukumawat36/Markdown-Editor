Markdown Live Preview &nbsp;
A React-based live Markdown editor with a split-screen layout. The editor allows users to type Markdown syntax in real-time, and the right side shows a live HTML preview of the input. This project consists of both client-side and server-side code in a single repository.

Features &nbsp;
Real-Time Preview: As you type Markdown, the right panel displays the live HTML preview.
Responsive Design: Optimized for mobile, tablet, and desktop views.
Fixed Layout: Editor and preview sections have a fixed width and height, ensuring a consistent design.
Simple Markdown to HTML Conversion: Uses a basic conversion method for previewing Markdown.
Technologies Used
React for building the user interface.
CSS for styling.
Node.js / Express for the server-side functionality.
Markdown Syntax for input.

Preview &nbsp;
Here’s a preview of how the application looks: &nbsp;
<img width="1189" alt="image" src="https://github.com/user-attachments/assets/3fd9fcbe-83c8-48c7-90d5-b26899ff3b42" />


Getting Started &nbsp;
To run the project locally, follow the steps below for setting up both the client (React) and server (Express):

1. Clone the repository &nbsp;
Start by cloning the repository to your local machine.

bash &nbsp;
Copy &nbsp;
git clone https://github.com/ishukumawat36/Markdown-Editor.git &nbsp;
cd markdown-live-preview &nbsp;
2. Set up the client (React) &nbsp;
Navigate to the client folder, install the necessary dependencies, and start the development server.

bash &nbsp;
Copy &nbsp;
cd client &nbsp;
npm install &nbsp;
npm start &nbsp;
The React app will be available at http://localhost:3000.

3. Set up the server (Express) &nbsp;
In a new terminal window, navigate to the server folder, install the necessary dependencies, and start the server.

bash &nbsp;
Copy &nbsp;
cd server &nbsp;
npm install &nbsp;
npm start &nbsp;
The server will be running on http://localhost:5000.

4. View the application &nbsp;
The React app will interact with the server running on http://localhost:5000 to convert Markdown to HTML.
Open your browser and navigate to http://localhost:3000 to view the live Markdown editor and preview.
Contributing &nbsp;
If you'd like to contribute to this project:

Fork the repository. &nbsp;
Create a new branch (git checkout -b feature-name). &nbsp;
Make your changes and commit them (git commit -am 'Add new feature'). &nbsp;
Push your branch (git push origin feature-name). &nbsp;
Create a new Pull Request. &nbsp;
License &nbsp;
This project is licensed under the MIT License. &nbsp;

Notes: &nbsp;
Make sure you have Node.js and npm installed on your system.
The project includes both the client-side React app and server-side Express app in a single repository.
You’ll need to run both the client and server for the application to function properly.
This version of the README clearly explains how to run both the client (React app) and server (Express API) locally, and it provides the necessary instructions for setting up the project.
