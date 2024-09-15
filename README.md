# MyTDL : My To-Do List

This project allows users to add, edit, and delete to-do notes.

## Get Started

Please follow the instructions below to run this project.

1. Install [node.js](https://nodejs.org) 
1. Clone this Git repository (the one that you are currently 
reading) to your local machine.
    ```
    git clone https://github.com/kalrit718/irusri-test.git
    ```
1. Navigate to the project directory.
    ```
    cd irusri-test
    ```
1. Install required dependencies by executing the following command: 
    ```
    npm install
    ```
1. Run the application by executing the following command: 
    ```
    npm run dev
    ```

1. If everything went well, the output from this command will instruct you to 
open [http://localhost:5173](http://localhost:5173) in your browser.
1. Run the application by openning the [http://localhost:5173](http://localhost:5173) in your browser.

## ICYMI

* The application relies on the responses of mock server calls within services.
* When the user signs in to the application, the mock server call responds with the to-do notes of the `public/todolist.json` file as the existing to-do notes, and the notes get saved to the local storage.
* Then onwards, the user can interact with the application to add, edit, and delete to-do notes.
* Since the application keeps the to-do list in sync with the local storage, users can reload the page without losing data.
* The local storage gets cleared when the user signs out of the application.
* User registration and user login features are completed.
* The mock server call for the user authentication always authenticates users to be legitimate unless you specifically enforce the `fail` flag.