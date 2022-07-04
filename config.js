'use strict'

module.exports =
{
  port: process.env.PORT || 35735,
  db: process.env.MONGODB_URI || 'localhost/textmiracles',
  SECRET_TOKEN : 'mykeytoken',
  user: process.env.USER ||  '',
  password: process.env.PASSWORD || ''
}