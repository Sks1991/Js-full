// ---------------------------------------- JSON (JavaScript Object Notation) ----------------------------------------- //

// JSON :-> Ye ek data format hai jiska use applications ke beech data exchange karne ke liye hota hai.
// {
//     "username": "admin",
//     "password": "admin123",
//     "role": "admin"
// }

// JavaScript Object vs JSON ---------------------------------------------------------------------------

// JavaScript Object
// const user = {
//     username: "admin",
//     password: "admin123"
// };

// JSON
// {
//     "username": "admin",
//     "password": "admin123"
// }

// JSON mein property names double quotes mein hote hain. ("username")
// JavaScript object mein: (username)

// JSON mein data types ------------------------------------------------------------------------------------
// String, Number, Boolean, Object, Array, null
/*
{
    "name": "Sudhir",   // String
    "age": 30,          // Number
    "active": true,     // Boolean
    "skills": ["JavaScript", "Playwright"],  // Array
    "address": {
        "city": "Delhi"  // Object
    },
    "middleName": null   // Null
}
*/

// JavaScript mein: let value = undefined; (valid hai.)
// Lekin JSON mein: { "value": undefined } (❌ Valid JSON nahi hai.)
// JSON mein missing value ke liye generally property omit karte hain ya null use karte hain.
