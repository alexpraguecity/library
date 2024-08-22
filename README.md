# The Library Application

## Overview
The Library is a web application designed to view and manage a collection of books. There are two types of users: Readers and Librarians. Readers are able to view the collection of books available in the catalog without requiring authorization, while librarians are granting special priveldges to manage the library all together by adding, viewing, updating, and even deleting books.

## Features
- **Add Books**: Librarians are able to new books to the catalog, specifying the title, author, and genre.
- **View Books**: Both librarians and users are able to view the list of books currently available in the library.
- **Update Books**: Librarians are able to update details of existing books.
- **Delete Books**: Librarians are able to delete books from the library.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: DigitalOcean
## Application Structure

### 1. Backend (Node.js and Express)
- **server.js:** The backbone of the application. It is for setting up Express server and handling the routing.
- **routes.js:** This contains the API routes for the managing of books and user authentication.
- **model.js:** Handles the database operations for managing books and users.
- **postgres.js:** Configures and connects to the PostgreSQL database.
  
### 2. Frontend (HTML and JavaScript)
- **index.html:** This is the main page of the application (the user interface) where users are able to interact with the library catalog.
- **app.js:** The app handles the frontend logic for the loading of books and the interacts with the backend via Fetch API.

### 3. Environment Variables
- **PORT:** This is the port that the server runs on.
- **DATABASE_URL:** This is the connection url of the database.
- **ACCESS_TOKEN_SECRET:** This is a secret access token for signing JWT tokens.

### 4. Database (PostgreSQL)
- **Tables:**
  - **users:** This table is for the storing of user information for the authentication, it helps seperate the librarians from the readers.
  - **books:** The book table stores book information, including the title, author, and genre.
## Setup Instructions

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Clone the Repository + Link to live
- git clone https://github.com/alexpraguecity/library.git
cd library -- to navigate to the directory
- Library Application live on Digital Ocean
 https://orca-app-m4b96.ondigitalocean.app/

### Installing Dependencies
- After cloning the repo and navigating to the directory the next steps   include the installation of depencies by using: npm install.

### Database Creation
For the database, ensuring that PostgreSQL is running correctly, the following code can be used for its creation:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
This is the table where the user information will be stored.

Next is the process of populating the tables as follows:

INSERT INTO users (username, password, role) VALUES 
('librarian', '1234', 'librarian'),
('reader', '1234', 'reader');

The second important table is that of the Books, the whole point of the library. This is the code to use in order to create the table:

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL
);

The next step is to populate it so that the library has material for our readers and librarians. This should be done as follows:

INSERT INTO books (title, author, genre) VALUES
('The Night Circus', 'Erin Morgenstern', 'Fantasy'),
('The Fault in Our Stars', 'John Green', 'Young Adult'),
('The Book Thief', 'Markus Zusak', 'Historical Fiction'),
('The Catcher in the Rye', 'J.D. Salinger', 'Classic'),
('Divergent', 'Veronica Roth', 'Dystopian'),
('The Alchemist', 'Paulo Coelho', 'Philosophical'),
('To All the Boys I\'ve Loved Before', 'Jenny Han', 'Romance'),
('The Giver', 'Lois Lowry', 'Science Fiction'),
('Life of Pi', 'Yann Martel', 'Adventure'),
('The Road', 'Cormac McCarthy', 'Post-Apocalyptic');

### Test the tables
If neccesary, you can test one of the tables by using:

SELECT * FROM books;

This should bring up the entire list.

### Environmental Variables
- Next is to create the .env file within the directory preferably within a source code editer such as Visual Studio Code to ensure no errors are made. Within the file you will be required to add the following code:
PORT="88"
POSTGRES='{"host":"localhost","port":5432,"user":"youruser","pass":"yourpassword","database":"library_list"}'
ACCESS_TOKEN_SECRET="library"

### Start the Server
- In order to start the server, you may run npm start and then visit http://localhost:88 to view the application if it is working correctly.

## Critical Evaluation
### Challenges and Issues
- Deployment Issues: I encountered several difficulties while attempting to move my application onto a web application platform. Speicifcally with Heroku. Secondly, when moving to Digital Ocean, the complexity of set up was unexpected. I managed to successfully create and link my github repositry to the platform, however adding the individual functionality proved to be a challenge as it is required to add everything seprately.

- Database Integration: Setting up and connecting to a PostgreSQL, proved to be a challenge at first, especially when the first installation did not add it to the system path. However once I overcame that hurdle after researching potential solutions, I managed to successfully create my database and connect it to my application.

- Due to my time constraints, slightly poor planning and lack of expertise it took me longer to put together the project as there was a lot material that I was actually unfamiliar with. But after reviewing all of the documents available and a lot of online resources including documentation, I managed to find adequate examples and good programming practices which helped me get as far as I did. 

### Future Improvements
If I had a similar project in the future, I would make an effort to make a more effective plan, including specific timelines and measures to take if parts of the project potentially start to delay others. Moreover, I would focus on completing the parts I am able to do instead of not moving forward until I get past one area, however I am surprised at the extent of knowledge I gained from this experience. Lastly, I would make more of an effort to reach out and ask for assistance or information when I am in need.
### Conclusion
This project aimed to create a functional library collection with user authentication and basic CRUD operations and even though the development process incurred several challenges, specifically regarding several deployement issues onto a cloud platform namely heroku and Digital Ocean, as they were the most ideal options, It is fair to say that the core structure and logic of the application were researched and developed, even though not able to function. Moreover, the knowledge gained from the various research of methods and functions that I would not usually use due to their complexity was surpirisingly interesting.

