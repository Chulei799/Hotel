# Hotel Management System

A simple Hotel Management System implemented in Node.js and TypeScript.

## Table of Contents

* [Introduction](#Inroduction)
* [Dependencies](#Dependencies)
* [Getting Started](#Getting-started)
  * [Prerequisites](#Prerequisites)
  * [Installation](#Installation)
* [Usage](#Usage)
* [Database](#Database)
## Introduction

This project is a Hotel Management System. It utilizes Node.js and TypeScript to implement various features related to hotel management.

## Dependencies

### [mongoose](https://www.npmjs.com/package/mongoose)

* Used for MongoDB database interaction, defining schemas, and performing CRUD operations.
### [mongodb](https://www.npmjs.com/package/mongodb)

* Required by Mongoose for low-level MongoDB operations.
### [ts-node](https://www.npmjs.com/package/ts-node)

* Used to directly run TypeScript files without the need for a separate compilation step.
### [typescript](https://www.npmjs.com/package/typescript)

* Used to enable static typing, improve code maintainability, and catch potential errors during development.
## Dev Dependencies

### [@types/node](https://www.npmjs.com/package/@types/node)

* Provides TypeScript with type definitions for Node.js core modules.

### [dotenv](https://www.npmjs.com/package/dotenv)

* Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v14 or higher)
* npm
### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/RodrigoCostaTA/university-management-system.git
```
#### 2. Navigate to the project directory:
```bash
cd Hotel
```
#### 3. Install dependencies:
```bash
npm install
```
## Usage
```bash
npm start
```
## Database

The project uses MongoDB as the database. Make sure you have a running MongoDB instance. Update the connection string in index.ts accordingly.
