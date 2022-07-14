const mongoose=require('mongoose')
const { boolean } = require('webidl-conversions')
mongoose.connect('mongodb://localhost:27017/learner',{ useNewUrlParser :true})
.then(()=>console.log('your server start successfully'))
.catch((err)=>console.log(err))


data=new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNumber:Number,
    gender:String,
    // gender true for man
    
    inp_date:{
        type:String,
        default: Date.now
    },
    massage:String
});

ata= new mongoose.model('ata',data)
 
function main_file(a,b,c,d,e,f){

    silence=new ata({
        name:a,
        email:b,
        phoneNumber:c,
        gender:d,
        inp_date:e,
        massage:f
    })

    silence.save(function(err,silence){
        if (err)return console.error(err);
        })
}
// main('anurag','me_anurag',true,6387482130,'m')
module.exports.main_file = main_file;