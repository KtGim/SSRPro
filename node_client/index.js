#!/usr/bin/env node

const program = require('commander')
const csv = require('csv')
const fs = require('fs')
const inquirer = require('inquirer')
const chalk = require('chalk')

const questions = [
  {
    type : "input",
    name : "sender.email",
    message : "Sender's email address - "
  },
  {
    type : "input",
    name : "sender.name",
    message : "Sender's name - "
  },
  {
    type : "input",
    name : "subject",
    message : "Subject - "
  }
]

const sendEmail = function(to, from, subject) {
    const sender = chalk.green(`${from.name}(${from.email})`)
    const receiver = chalk.green(`${to.name}(${to.email})`)
    const theme = chalk.blue(subject)
    
    console.log(`${sender} send a mail to ${receiver} and the subject of the email is ${theme}`)
}
program
    .version('0.0.1')
    .option('-l, --list [list]', 'List of customers in CSV')
    .parse(process.argv)

const contactList = [];
const stream = fs.createReadStream(program.list)

stream
    .pipe(csv.parse({ delimiter : "," }))

stream
  .on('error', function (err) {
    return console.error(err.message)
  })
  .on('data', function (data) {
    console.log(data[0], '=========')
    let name = data[0] + " " + data[1]
    let email = data[2]
    contactList.push({ name : name, email : email })
  })
  .on('end', function () {
    inquirer.prompt(questions).then((ans) => {
        for (let i = 0; i < contactList.length; i++) {
          sendEmail(contactList[i], ans.sender, ans.subject)
        }
    }).catch((err) => {
        console.log(err)
    })
  })