Standard Folder Structure

```
tests                       # This will contain all of your test files

src
  │   app.js                # App entry point
  └───api                   # Express route controllers for all the endpoints of the app
    └───middleware          # Controller level middleware
    └───controller          # Controller decides where the request goes
    └───models              # Database models is queries using the enitity
      └───entities          # Database entity is a class that maps to a database table
    └───services            # All the business logic is here
  └───config                # Environment variables and configuration related stuff
  └───db                    # Store Migrations/Seed
  └───loaders               # Split the startup process into modules, this can also be used for global middleware
  └───types                 # Type declaration files (d.ts) for Typescript

```

Future Ideas
```
└───validation        # Controller level validation
└───jobs              # Cron job tasks *optional*
└───subscribers       # Event handlers for tasks *optional*
```

Project Installation
```bash
cp .env.example .env

npm install

// install a database driver ( choose one )
npm install mysql
npm install mssql
npm install pg
npm install mariadb

// run the server in development mode
npm run dev

// run the server in development mode to turn on node debugger
npm run dev:inspect
```

Note: if using vscode you can hit F5 on a file and it will run the program and launch the debugger for you.


This project follows the 3 Layer Architecture:
  - The idea is to use the principle of separation of concerns to make a more modular application.
  - This allows you to scale/replace one of these separate pieces without impacting the rest.

```
    -------------------------------
    |                             |
    |         Controller          |   All things related to the routes
    |                             |
    -------------------------------
        ↓                     ↑
        ↓                     ↑
    -------------------------------
    |                             |
    |          Service            |   Business logic here
    |                             |
    -------------------------------
        ↓                     ↑
        ↓                     ↑
    -------------------------------
    |                             |
    |         Data Access         |   Only data points here
    |                             |
    -------------------------------
```


Single Responsibility Principle (SRP)

  *Definition:*

  - The single-responsibility principle (SRP) is a computer-programming principle that states that every module, class or function in a computer program should have responsibility over a single part of that program's functionality, which it should encapsulate. All of that module, class or function's services should be narrowly aligned with that responsibility

Separation of Concerns Principle (SoC)

  *Definition:*

  - In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program. A concern can be as general as "the details of the hardware for an application", or as specific as "the name of which class to instantiate". A program that embodies SoC well is called a modular program. Modularity, and hence separation of concerns, is achieved by encapsulating information inside a section of code that has a well-defined interface. Encapsulation is a means of information hiding. Layered designs in information systems are another embodiment of separation of concerns (e.g., presentation layer, business logic layer, data access layer, persistence layer).

Keep It Simple, Stupid (KISS)

  *Definition:*

  - The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided.