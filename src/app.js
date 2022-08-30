const express = require('express')
const app = express();
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
//Path for Express Config
const publicDirectory = path.join(__dirname,'../public')
const viewPath= path.join(__dirname,'../templates/views')
const partialsPath =path.join(__dirname,'../templates/partials')
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsPath)

app.set('view engine','hbs') 
app.set('views',viewPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:"Index"
    })
})

app.get('/About',(req,res)=>{
    res.render('About',{
        title:"About page"
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            
                error:"Very Much Error is There",
            
        })
    }
    console.log(req.query)
    res.send({
        prodName:"Apple",
        price:"Rs.22500",
        OS:"Android"
    })
})

app.get('/help',(req,res)=>{
    res.render('Help',{
        title:"Help",
        helpText:"Help Text is Here",
        helpName:"TK123K Help"
    })
})
app.get('/help/*',(req,res)=>{
    res.send("<h1>Pages of the Help bar</h1>")

})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Address is not there"
        })
    }
    geoCode(req.query.address,(error,{Lattitude,Longtitude,weather_descriptions,weather_icons,locationName})=>{
        // res.send({
        //     address:req.query.address,
        //     forecast:weather_descriptions
        // })
        res.render('Weather',{
            title:"Weather",
            weatherName:"Kishore",
            forecast:weather_descriptions,
            forecastImg:weather_icons,
            loc_name:locationName,
            address:req.query.address
        })
        

    })
 
})
app.get('*',(req,res)=>{
    res.send("<h1>404 - PAGE NOT FOUND</h1>")

})


app.listen(3003,()=>{
    console.log("SERVER IS LISTEING ON 3003 PORT ")
})