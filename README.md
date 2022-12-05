# Next.js Boilerplate with MongoDB mongoose and SEO

This is a [Next.js](https://nextjs.org/) boilerplate project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose) using [mongoose](https://mongoosejs.com/) for MongoDB database connection and schemas.

[![GitHub Repo stars](https://img.shields.io/github/stars/NurNils/nextjs-boilerplate?style=social)](https://github.com/NurNils/nextjs-boilerplate)
[![GitHub followers](https://img.shields.io/github/followers/NurNils?style=social)](https://github.com/NurNils)

## About

This project was developed by Nils-Christopher Wiesenauer (NurNils) to simply create new Next.js projects with SEO and an API connected to a MongoDB using mongoose.

⚙️ The project is created with [Next.js](https://nextjs.org/) with [MongoDB](https://www.mongodb.com/). [More info](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)

📄 To create sitemap(s) and robots.txt the sitemap generator [next-sitemap](https://www.npmjs.com/package/next-sitemap) is used.

📈 [mongoose](https://mongoosejs.com/) is used for elegant mongodb object modeling

💬 [JSend](https://github.com/omniti-labs/jsend) is used as a specification for a simple, no-frills, JSON based format for application-level communication

🎨 [Prettier](https://prettier.io/) is used for code formatting

📝 Licensed under [MIT](/LICENSE): Do almost anything you want with this project files

## Table of Contents
- [MongoDB](#MongoDB)
- [Installation and Usage](#Installation-and-Usage)
    - [Set up a MongoDB database](#Set-up-a-MongoDB-database)
    - [Set up environment variables](#Set-up-environment-variables)
    - [Run Next.js in development mode](#Run-Next.js-in-development-mode)
    - [Learn More](#Learn-More)
    - [Deploy on Vercel](#Deploy-on-Vercel)
  
## MongoDB

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Installation and Usage

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)
Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
