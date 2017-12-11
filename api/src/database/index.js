var Connection = require('tedious').Connection;  
var config = {  
    userName: 'rapid-transfer',  
    password: 'Password123',  
    server: 'rapid-transfer.database.windows.net',  
    // When you connect to Azure SQL Database, you need these next options.  
    options: {encrypt: true, database: 'rapid-transfer'}  
}; 

 

module.exports = function() {
  var connection = new Connection(config);  
  connection.on('connect', function(err) {  
      // If no error, then good to proceed.  
      console.log("Connected");  
      executeStatement();  
  }); 
}