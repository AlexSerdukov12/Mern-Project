const express = require('express');
const port = process.env.PORT || 5001;
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
const {searchLaundryMachines, searchDryers,searchRefrigerators,searchDishwashers,searchTelevisions,searchStoves,searchAirconditioners,searchOvens} = require('./mongoDB')

// create application/json parser
var jsonParser = bodyParser.json()

app.post('/login', jsonParser, (req, res) => {
 console.log('Receiving data from frontend')
  console.log(req.body);
  var email = req.body.email_data
  if(email.includes('alex') == true) {
    res.send('FOUND').sendStatus(200)
  } else {
    res.send('NOT FOUND').sendStatus(404)
  }
})

app.get('/getlaundrymachines', (req, res) => {

  searchLaundryMachines({}).then((laundryMachines) => {
    res.send(laundryMachines)
  }).catch((machinesError) => {
    console.log(machinesError)
  })
 })

app.get('/getdryers', (req, res) => {
console.log('im inside get dryers')

searchDryers({}).then((dryers) => {
  res.send(dryers)
}).catch((dryersError) => {
  console.log(dryersError)
})
})

app.get('/getrefrigerators', (req, res) => {
console.log('im inside get refrigerators')

searchRefrigerators({}).then((refrigerators) => {
  res.send(refrigerators)
}).catch((refrigeratorsError) => {
  console.log(refrigeratorsError)
})
})

app.get('/getdishwashers', (req, res) => {
console.log('im inside get dishwashers')

searchDishwashers({}).then((dishwashers) => {
  res.send(dishwashers)
}).catch((dishwashersError) => {
  console.log(dishwashersError)
})
})


app.get('/gettelevisions', (req, res) => {
  console.log('im inside get televisions')
  
  searchTelevisions({}).then((televisions) => {
    res.send(televisions)
  }).catch((televisionsError) => {
    console.log(televisionsError)
  })
  })

app.get('/getstoves', (req, res) => {
  console.log('im inside get stoves')
  
  searchStoves({}).then((stoves) => {
    res.send(stoves)
  }).catch((stovessError) => {
    console.log(stovessError)
  })
  })

app.get('/getairconditioners', (req, res) => {
  console.log('im inside get airconditioners')
  
  searchAirconditioners({}).then((airconditioners) => {
    res.send(airconditioners)
  }).catch((airconditionersError) => {
    console.log(airconditionersError)
  })
  })
  
app.get('/getovens', (req, res) => {
  console.log('im inside get ovens')
  
  searchOvens({}).then((ovens) => {
    res.send(ovens)
  }).catch((ovensError) => {
    console.log(ovensError)
  })
  })

app.listen(port, () => {
  console.log('lets rocknroll');
});




