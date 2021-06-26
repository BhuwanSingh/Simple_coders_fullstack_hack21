const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./../models/User')
const Center = require('./../models/Center')
const Vans = require('./../models/vans')

dotenv.config({ path: './config.env' })

const DB =
  'mongodb+srv://simple:dyFXgcLsu1ZHXwGJ@cluster0.c3hqp.mongodb.net/vaccine?retryWrites=true&w=majority'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'))

const centres = JSON.parse(fs.readFileSync(`${__dirname}/centers.json`, 'utf8'))

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf8'))

const vans = JSON.parse(fs.readFileSync(`${__dirname}/vans.json`, 'utf8'))

const inData = async () => {
  try {
    if (process.argv[3] === '--c') {
      await Center.create(centres)
    } else if (process.argv[3] === '--u') {
      await User.create(users)
    } else if (process.argv[3] === '--v') {
      await Vans.create(vans)
    }
    console.log('Data Loaded in DB')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

//console.log(centres)
const delData = async () => {
  try {
    if (process.argv[3] === '--c') {
      await Center.deleteMany()
    } else if (process.argv[3] === '--u') {
      await User.deleteMany()
    } else if (process.argv[3] === '--v') {
      await Vans.deleteMany()
    }
    console.log('Data deleted in DB')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '--i') {
  inData()
} else if (process.argv[2] === '--d') {
  delData()
} else {
  process.exit()
}

console.log(process.argv)
