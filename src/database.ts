import {  PrismaClient } from '@prisma/client'
import _ = require('lodash');
const prisma = new PrismaClient({
    datasources:{
        db:{
            url: process.env.DATABASE_URL_USER
        }
    }
})
module.exports = {
    prisma,
}