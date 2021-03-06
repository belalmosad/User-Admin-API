# User Admin API
API for performing CRUD operations. Main roles are users and admins.

**Users can**:
1. Register to the system.
2. Login to the system.
3. Update their data.
4. View their data.
5. Delete their data.

**Users Can Not**:
1. Show other users' data.
2. Update or Delete other users' data.
3. Show system logs.

**Admins Can**:
1. Show logs of the system.
2. Show other normal users' data (non-admins)

## Technologies Used:
* Nodejs and Express as backend framework.
* Mongoose (Mongo DB driver).
* Json Web Token for Authentication.
* bcrypt for encrypting passwords.
* Postman for API Testing.

> **__NOTE:__** environment variables (DB_URL and SECRET_KEY) are supposed to be in .env file which is ignored by .gitignore file.  




