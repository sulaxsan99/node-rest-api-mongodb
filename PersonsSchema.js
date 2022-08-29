const mongoose =require('mongoose');


const PersonsShema =mongoose.Schema({
    Name : {
        type : String,
        required :true
    },
    Age : {
        type : String,
        require:true
    },
    CreatedDate: {
        type :Date,
    default :Date.now
    }

});


module.exports=mongoose.model('Persons',PersonsShema);