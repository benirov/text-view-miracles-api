'use strict'

module.exports =
{
  port: process.env.PORT || 35735,
  db: process.env.MONGODB_URI || 'mongodb://develop:12345678bv@ds035735.mlab.com/textmiracles',
  SECRET_TOKEN : 'mykeytoken'
}