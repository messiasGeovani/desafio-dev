# ByCoders Challenge: api
> A CNAB files upload api maded with NodeJS, Express, Typeorm and Typescript.

## Routes Usage Manual

To consume the following routes, it's necessary to be authenticated, sending an authorization token in the header of each request where the option "Auth Required" is true.

### User Routes

| Method | Route | Functionality | Body Data | Auth Required | Content Return |
|---|---|---|---|---|---|
| POST | /users | create a new user | name: string, email: string, password: string | false | User Schema |
| GET | /users | show all users | empty | true | User Schema List |
| GET | /users/:id | show user | empty | true | User Schema |

### Auth Routes

| Method | Route | Functionality | Body Data | Auth Required | Content Return |
|---|---|---|---|---|---|
| POST | /auth | authenticate the user | email, password | false | id: string, name: string, email: string, token: string |

### transaction Routes

| Method | Route | Functionality | Body Data | Auth Required | Content Return |
|---|---|---|---|---|---|
| POST | /transactions | register a new companion | document: file | true | empty |
| GET | /transactions | show all transactions | empty | true | Transaction Schema List
| GET | /transactions/:storeID | get store transactions | empty | true | Transaction Schema List |

### Store Routes

| Method | Route | Functionality | Body Data | Auth Required | Content Return |
|---|---|---|---|---|---|
| GET | /store | show all store | empty | true | Store Schema List |
| GET | /store/:name | search store by name | empty | true | Store Schema List |

---

## Development Manual

---

* ### Project Structure

```
├── Dockerfile
├── ormconfig.docker.json
├── ormconfig.json
├── package.json
├── README.md
├── scripts
│   └── start.sh
├── src
│   ├── app
│   │   ├── controllers
│   │   │   ├── AuthController.ts
│   │   │   ├── StoreController.ts
│   │   │   ├── TransactionController.ts
│   │   │   └── UserController.ts
│   │   ├── database
│   │   │   ├── migrations
│   │   │   │   ├── 1629146761586-CreateStore.ts
│   │   │   │   ├── 1629159178653-CreateTransaction.ts
│   │   │   │   └── 1629335701965-CreateCardNumberTransactionTableField.ts
│   │   │   └── models
│   │   │       ├── Store.ts
│   │   │       ├── Transaction.ts
│   │   │       └── User.ts
│   │   ├── dtos
│   │   │   ├── IStoreDTO.ts
│   │   │   ├── ITransactionDTO.ts
│   │   │   └── IUserDTO.ts
│   │   ├── index.ts
│   │   ├── interfaces
│   │   │   ├── ITokenPayload.ts
│   │   │   └── ITransaction.ts
│   │   ├── middlewares
│   │   │   └── authMiddleware.ts
│   │   ├── plugins
│   │   │   └── dayjs.ts
│   │   ├── repositories
│   │   │   ├── StoreRepository.ts
│   │   │   └── TransactionRepository.ts
│   │   ├── services
│   │   │   └── TransactionServices.ts
│   │   └── utils
│   │       ├── normalize.ts
│   │       └── parseTransactionData.ts
│   ├── index.ts
│   ├── routes.ts
│   └── @types
│       └── express
│           └── index.d.ts
├── tsconfig.json
└── yarn.lock
```

---

* ### Data structure schemas

The project have the current schemas:

#### User Schema

```
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}
```

#### Store Schema

```
{
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}
```

#### Transaction Schema

```
{
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    store: Store
}
```
