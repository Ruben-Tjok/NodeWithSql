var Connection = require('tedious').Connection;

var config = {
    server: '192.168.1.138',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'DBP@ssw0rd@TGN'
        }
    },
    options: {
        database: 'company_test',
        // instanceName: 'MSSQLSERVER',
        rowCollectionOnDone: true,
        useColumnNames: false
    }
}

var connection = new Connection(config);

connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});

module.exports = connection;
