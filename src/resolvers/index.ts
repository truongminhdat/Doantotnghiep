import userQueries from './query/userQueries'
import userMutation from './mutation/userMutation'
import khoaQueries from './query/khoaQueries'
import khoaMutation from './mutation/khoaMutation'
import chucvuMutation from './mutation/chucvuMutation'
import chucvuQueries from './query/chucvuQueries'
import _ = require('lodash')

const resolvers =  _.merge([
                        userQueries, userMutation, 
                        khoaQueries,khoaMutation ,
                        chucvuMutation,chucvuQueries                
                    ]
                    )

export  { resolvers }