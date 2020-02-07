# TravelAku

**Create Username**

* **URL**

    http://localhost:3000/register

* **Method:**

    `POST`

* **URL Params**

    none

* **Data Params**

    ```javascript
    {
      "username":"username",
      "email":"admin@mail.com",
      "password":"username"
    }
    ```

* **Success Response:**

  * **Code:** 201 <br />
  *  **Content:** 
    
    ```javascript
    {
        "id": 1,
        "username": "username",
        "email": "admin@mail.com",
        "password": "$2a$10$4vDIYzg6UOsOU1XcZIAxcuZONtSXaYSGAexRx5WX8vEjUlGgFTF/e",
        "updatedAt": "2020-02-07T04:18:49.678Z",
        "createdAt": "2020-02-07T04:18:49.678Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    *  **Content:** 

    ```javascript
    {
        message: "email cant be empty"
    }
    ```

    OR

    * **Code:** 500 Internal Server Error <br />
    *  **Content:** `
    ```javascript
    {
        message: "Internal Server Error"
    }
    ```

    **Login**
----
  

* **URL**

  http://localhost:3000/login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

    None

* **Data Params**

    ```javascript
    {
	"email":"admin@mail.com",
	"password":"username"
    }
    ```

* **Success Response:**

  * **Code:** 201 <br />
  *  **Content:** 
    
    ```javascript
    {
      "email":"admin@mail.com",
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a21hbmJhaWhhcWlAZ21haWwuY29tIiwiaWF0IjoxNTgwODExNzE1fQ.eIy3vbtZZql3oJIIOOX4wJlHcTxb1lJZA5eVK5Zl66c"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    *  **Content:** 

    ```javascript
    {
        message: "Invalid username / password"
    }
    ```

    OR

    * **Code:** 500 Internal Server Error <br />
    *  **Content:** `
    ```javascript
    {
        message: "Internal Server Error"
    }
    ```
    