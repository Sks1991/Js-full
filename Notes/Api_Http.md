// ----------------------------------- API / HTTP ------------------------------------- //

API = Application Programming Interface

- API ek medium hai jiske through ek application doosri application/server se data exchange karti hai.

API Testing mein hum kya check karte hain?

- Request sahi hai?
- Status code kya hai?
- Response sahi hai?
- Response body sahi hai?
- Error handling sahi hai?
- Invalid data par expected error aa raha hai?

Request aur Response --------------------------------------------------------------------
Client
│
│ Request
↓
Server
│
│ Response
↓
Client

Request:- Client server ko bhejta hai:
URL
Method
Headers
Body

Response:- Server return karta hai:
Status Code
Headers
Body

HTTP Methods 🔥

GET -----> Data lena
POST -----> Data create/send karna
PUT -----> Existing data ko replace/update karna
PATCH -----> Existing data ka partial update
DELETE -----> Data delete karna

Example
GET -----> /users
POST -----> /users
PUT -----> /users/101
PATCH -----> /users/101
DELETE -----> /users/101

GET -------------------------------------------------------------------------------------
GET ka use data lene ke liye.

Example:
GET /users

Response:
[
{
"id": 1,
"name": "Sudhir"
},
{
"id": 2,
"name": "Rahul"
}
]

Automation mein check:
Status = 200
Users available
Response structure correct

POST --------------------------------------------------------------------------------------------
POST generally new data create/send karne ke liye.

Example:
POST /users

Request body:
{
"name": "Sudhir",
"role": "tester"
}

Server:
User create

Response:
{
"id": 101,
"name": "Sudhir",
"role": "tester"
}

PUT vs PATCH --------------------------------------------------------------------------------------------
PUT -------------------------------------------
Generally complete resource replace/update karne ke concept ke liye use hota hai.
{
"name": "Sudhir",
"role": "tester",
"city": "Delhi"
}

PATCH -----------------------------------------
Sirf required field update ke liye.
{
"city": "Mumbai"
}

PUT → Full update/replace

PATCH → Partial update

DELETE ------------------------------------------------------------------------------------
Example:
DELETE /users/101

Server user delete karta hai.

Automation:
Request → DELETE
Response → expected status
User → no longer available

Status Codes 🔥🔥 --------------------------------------------------------------------------
API testing mein bahut important.
2xx — Success
200 → OK
201 → Created
204 → No Content

4xx — Client-side problem
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found

5xx — Server-side problem
500 → Internal Server Error
502 → Bad Gateway
503 → Service Unavailable

Example: Login API -------------------------------------------
Suppose:
POST /login

Request:
{
"username": "admin",
"password": "admin123"
}

Successful response:
{
"status": 200,
"message": "Login successful",
"token": "abc123"
}

Automation tester kya check karega?
Status = 200
↓
message = Login successful
↓
token exists
↓
Test PASS

Wrong password:
{
"status": 401,
"message": "Invalid credentials"
}

Test:
Status = 401
Message = Invalid credentials
↓
PASS

Error response bhi test ka valid result ho sakta hai.

Headers kya hote hain? -------------------------------------------------------------
Headers additional information provide karte hain.

Example:
Content-Type: application/json
Authorization: Bearer token

Common headers:
Content-Type
Server ko batata hai body kis format mein hai.
Content-Type: application/json

Authorization
Authentication information:
Authorization: Bearer abc123
🔥 API automation ke liye important.

12. Body kya hoti hai? -----------------------------------------------------------------------
    Request ke andar jo actual data bhejte hain, woh body.

Example:
{
"username": "admin",
"password": "admin123"
}

Mostly POST/PUT/PATCH requests mein body important hoti hai.

                 REQUEST
                    ↓
        ┌────────────────────┐
        │ URL                │
        │ Method             │
        │ Headers            │
        │ Body               │
        └────────────────────┘
                    ↓
                  SERVER
                    ↓
        ┌────────────────────┐
        │ Status Code        │
        │ Headers            │
        │ Response Body      │
        └────────────────────┘
                    ↓
                 RESPONSE

API
↓
HTTP
↓
Request
↓
GET / POST / PUT / PATCH / DELETE
↓
Headers + Body
↓
Server
↓
Response
↓
Status Code + Response Body
↓
Validation
