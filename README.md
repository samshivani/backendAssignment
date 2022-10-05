# Backend Assignment

Given two files `app.js` and a database file `amazonaws.db` consisting of a table 'user_table'.



**User Table**

| Columns    | Type    |
| ---------- | ------- |
| id   | INTEGER |
| first_name | VARCHAR    |
| first_name | VARCHAR |
| company_name | VARCHAR |
| company_name | VARCHAR |
| city |VARCHAR |
| age |VARCHAR |
| city | VARCHAR|
| state |VARCHAR |
| zip |VARCHAR |
| email | VARCHAR|
| web |VARCHAR |
| age |INTEGER |


### API 1

#### Path: `/users/`

#### Method: `GET`

#### Description:

Returns a list of all users in the user table

#### Response

```
[
  {
    "id": 1,
    "first_name": "James",
    "last_name": "Butt",
    "company_name": "Benton, John B Jr",
    "city": "New Orleans",
    "state": "LA",
    "zip": 70116,
    "email": "jbutt@gmail.com",
    "web": "http://www.bentonjohnbjr.com",
    "age": 70
  },
  {
    "id": 2,
    "first_name": "Josephine",
    "last_name": "Darakjy",
    "company_name": "Chanay, Jeffrey A Esq",
    "city": "Brighton",
    "state": "MI",
    "zip": 48116,
    "email": "josephine_darakjy@darakjy.org",
    "web": "http://www.chanayjeffreyaesq.com",
    "age": 48
  }
]
```

### API 2

#### Path: `/user/:userId/`

#### Method: `GET`

#### Description:

Returns a user based on the user ID

#### Response

```
{
  "id": 1,
  "first_name": "James",
  "last_name": "Butt",
  "company_name": "Benton, John B Jr",
  "city": "New Orleans",
  "state": "LA",
  "zip": 70116,
  "email": "jbutt@gmail.com",
  "web": "http://www.bentonjohnbjr.com",
  "age": 70
}
```

### API 3

#### Path: `/users/`

#### Method: `POST`

#### Description:

Create a user in the user table

#### Request

```
{
  "id": 2,
  "first_name": "Josephine",
  "last_name": "Darakjy",
  "company_name": "Chanay, Jeffrey A Esq",
  "city": "Brighton",
  "state": "MI",
  "zip": 48116,
  "email": "josephine_darakjy@darakjy.org",
  "web": "http://www.chanayjeffreyaesq.com",
  "age": 48
}
```

#### Response

```
{}
```



### API 4

#### Path: `/user/:userId/`

#### Method: `DELETE`

#### Description:

Deletes a user from the user table based on the user ID

#### Response

```
{}

```

### API 5

#### Path: `/user/:userId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific user based on the user ID


#### Response

```

{}

```

