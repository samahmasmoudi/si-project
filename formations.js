var express = require('express'); 
var mysql = require("mysql");
var neo4j = require("neo4j-driver");
const { response } = require('../app');
var router = express.Router();

const mongoose = require('mongoose');

var cors = require('cors')


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some lem gacy browsers (IE11, various SmartTVs) choke on 204
}

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456789',
    database : 'formations'
   });

connection.connect();


var driver = neo4j.driver(
    'bolt://localhost:7687',
     neo4j.auth.basic('neo4j', '123456789')
  );


var session = driver.session()


//Mongo DataBase
async function connect() {
    
  await mongoose.connect('mongodb://localhost/traces', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

connect()

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.send('hello ');
});


/*router.get('/samah', function (req, res, next) {

  res.send(new Date());
});*/


const Schema = mongoose.Schema;
 
const EventSchema = new Schema({
  event: Object,
  date: Date
});


const Event = mongoose.model('Events', EventSchema);

router.get('/history', function(req, res, next){
  Event.find({}, function (err, docs) {
    res.send(docs);
  });
});

router.post('/send',cors(corsOptions), function(req, res, next) {


       
        // console.log(req);
        const instance = new Event();
        instance.event = req.body;
        instance.date = new Date();
        instance.save(function (err) {
          console.log('error', err);
        });
        

        let sql = 'SELECT * FROM formation where nom_formation = "' + req.body.name + '"';      
        connection.query(sql, (err, results, fields) => {
          if(err) throw err;
          console.log('Identifier', results[0].id); 
          session.run('MATCH (n:Formation {identifier: $identifier})-[:HAS]->(m:Module) RETURN m',
          { identifier: results[0].id })
          .then(data => {
              // data.records.map(record => record.get('identifier'));
              var ids = [];
              data.records.forEach(record => ids.push(record.get('m')));
              //res.header("Access-Control-Allow-Origin", "*");
              //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
              res.send(ids);
            })
            .catch(error => {
              console.log(error);
            })
            .then();  
        });

        
});
 


module.exports = router;
