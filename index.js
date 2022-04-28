let express=require('express')
let app=express()
let port=( process.env.PORT || 2000)
let cors=require('cors');
app.use(cors({
   origin:'*',
   methods:["GET",'DELETE']
}))
app.use(express.static("views"));
// app.set('view engine','ejs')



app.listen(port)



