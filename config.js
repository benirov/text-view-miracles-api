'use strict'

module.exports =
{
  port: process.env.PORT || 4000,
  db: process.env.MONGODB_URI || 'mongodb+srv://userdefault:mxqSsJpOQgQWBwse@textmiracles.rb0ru.mongodb.net/textmiracles?retryWrites=true&w=majority',
  SECRET_TOKEN : 'mykeytoken',
  user: process.env.USER ||  '',
  password: process.env.PASSWORD || ''
}