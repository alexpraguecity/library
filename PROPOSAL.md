<h1>Project Title: Library Application</h1>

<h2>Project Goal</h2>
<p>The goal of the project is to develop a basic web application that serves as a book library catalog. This catalog will consist of a REST API back-end and a simple front-end interface. It will have two types of users:</p>

<ul>
    <li><strong>Readers (Public Users):</strong> Public users will be able to browse the library's collection by genre, author, or title. Authentication will not be required for this level.</li>
    <li><strong>Librarians (Authorized Users):</strong> The authorized users will be able to manage the library's catalog, including the addition of new books, updating of existing book details, as well as the deletion of books. These features will require authentication.</li>
</ul>

<p>The application will be developed using Node.js, Express.js to handle application logic, database connection and REST API communication, PostgreSQL for the management of data, and JWT for authentication. The frontend will be developed using responsive HTML5/CSS3, Alpine.js framework, and the Fetch API.</p>

<h2>REST API Endpoint Design</h2>
<p>The REST API will be designed to handle the core functionalities of the application, crafted to the requirements of both the Readers and Librarians.</p>

<h3>Public Endpoints (No Authentication Required)</h3>

<h4>GET /api/books</h4>
<p><strong>Description:</strong> Retrieves a list of all current books in the library.</p>
<p><strong>Response:</strong> A JSON array of book objects, each containing an id, title, author, and genre.</p>

<h3>Protected Endpoints (Authentication Required using JWT)</h3>

<h4>POST /api/books</h4>
<p><strong>Description:</strong> Adds a new book to the library.</p>
<p><strong>Request Body:</strong> A JSON object containing title, author, and genre.</p>
<p><strong>Response:</strong> A JSON object of the new book with the addition of its id (which will be automatically generated).</p>

<h4>PATCH /api/books/:id</h4>
<p><strong>Description:</strong> Updates the details of an already existing book by use of its id.</p>
<p><strong>Request Body:</strong> A JSON object containing title, author, and genre.</p>
<p><strong>Response:</strong> A JSON object of the updated book.</p>

<h4>DELETE /api/books/:id</h4>
<p><strong>Description:</strong> Deletes a specific book from the catalog.</p>
<p><strong>Response:</strong> A JSON object of the deleted book.</p>

<h1>Project Plan</h1>

<h2>Project Setup and Initialization</h2>
<p>The first task would be to create the Git repository, install necessary dependencies, and configure environment variables.</p>

<h2>Back-end Development (REST API)</h2>
<p>The next task would be to develop the REST API using Express.js for the application logic and then to connect to PostgreSQL for data management, and lastly to secure routes with JWT for authentication.</p>

<h2>Front-end Development</h2>
<p>Following would be the creation of the the front-end interface using HTML5, CSS, and JavaScript by using Alpine.js. Next is to develop forms and the functionality to display books. 

<h2>Front-end and Back-end Combined</h2>
<p>Next the front-end will be integrated with the back-end using the Fetch API.</p>

<h2>Testing and Debugging</h2>
<p>Next the testing will be performed. Unit and Integration will be used in order to ensure each part is working correctly as well as to make sure that the Integration was successful. If an issue arises, it will hopefully be resolved.</p>

<h2>Deployment</h2>
<p>The application will be deployed (live) onto a cloud service, with the gaol of being accessible and functional in this environment.</p>

<h2>Documentation and Final Review</h2>
<p>Considering that the proposal would cover everything that I have set out to do, I would essentially complete the documentation beforehand and then make any neccesary edits in order to complete it. The final review will then be created reflecting the outcome of the application which includes a critical evaluation of the project, successful parts, and challenges encountered, followed by how they were resolved.</p>
