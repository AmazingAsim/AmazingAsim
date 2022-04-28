let express=require('express')
let app=express()

let cors=require('cors');
app.use(cors({
   origin:'*',
   methods:["GET",'DELETE']
}))
app.use(express.static("views"));
// app.set('view engine','ejs')
let port=( process.env.PORT || 2000)


httpserver.listen(port)



