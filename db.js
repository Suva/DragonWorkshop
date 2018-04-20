const MongoClient = require('mongodb').MongoClient

function db(userName, password) {
    userName = userName.replace(/[^a-z0-9]/i, '')
    let db

    async function connect() {
        const url = 'mongodb://mugloar:'+password+'@ds253229-a0.mlab.com:53229,ds253229-a1.mlab.com:53229/mugloar?replicaSet=rs-ds253229';
        const conn = await MongoClient.connect(url)
        return conn.db('mugloar')
    }

    async function collection(name) {
        if(!db) {
            db = await connect()
        }
        return db.collection(userName + '-' + name)
    }

    return {
        collection
    }
}

module.exports = db