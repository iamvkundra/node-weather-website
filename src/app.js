const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geodata = require('./utility/geoCode.js')
const forcast = require('./utility/Forcast.js')
const app = express()
const port = process.env.PORT || 3000

const pathValue = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(pathValue))


app.get('',(req,res)=>{
    res.render('index',{
        name: 'Weather Website',
        Company: 'TATA'

    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name: 'Weather website',
        

    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        name: 'Weather website',
        

    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        
        return res.send({
           
            error: 'NOT PROVIDED THE ADDRESS OR INVALID URL'
        })
    }
    geodata(req.query.address,(error,{ latitude, longitude,place_name}={})=>{

        if(error){
            return res.send({error})
          }
         
          forcast(longitude,latitude,(error, forcastdata)=>{
              if(error){
                return res.send({
                    error:'NOT A VALID ADDRESS'
                })
              }
              res.send({
                  place_name :place_name,
                  forcast: forcastdata
              })
    
          })
    })
   
})
app.get('/',(req,res)=>{
    res.render('404',{
        errormessage : 'OOPPPSSS, WE ARE BUILDING THIS',
        name:'MAYANK KUMAR'
    })
})

app.listen(port,()=>{
    console.log("starting the server" +port)
})