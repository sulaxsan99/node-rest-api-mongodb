//third party model
const express =require('express');
const router =express.Router();
const Persons=require('./PersonsSchema');

router.use(express.json());

// router.get('/',(req,res) => {
//     res.json("Router is working");
// });

router.post('/',async(req,res) => {
    try {
        const postPersons = await new Persons({
            Name: req.body.Name,
            Age: req.body.Age

        });
        const savePersons = await postPersons.save();
        res.status(200).json(savePersons);
    } catch (err) {
        res.json({ "err": err });
    }
});
//get all
router.get('/',async(req,res) => {
    try {
        const getAll =await Persons.find();
        res.status(200).json(getAll);
    } catch (err) {
        res.json({ "err": err });
    }
});


//get by id
router.get('/:id',async(req,res) => {
    try {
        const getbyid =await Persons.findById(req.params.id);
        res.status(200).json(getbyid);
    } catch (err) {
        res.json({ "err": err });
    }
});
//update
router.put('/update',async(req,res) => {
    try {
        const update =await Persons.update({_id:req.body._id},{$set:
            {
                Name:req.body.Name,
                Age:req.body.Age
            }
        });
        res.status(200).json(update);
    } catch (err) {
        res.json({ "err": err });
    }
});

//delete
router.delete('/delete/:id',async(req,res) => {
    try {
        const deleteper = await Persons.remove({_id:req.params.id});
        res.status(200).json(deleteper);
    } catch (err) {
        res.json({ "err": err });
    }
});

module.exports=router;