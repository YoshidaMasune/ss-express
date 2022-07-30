const express = require('express');
const router = express.Router();

// IMPORT MODEL
const Users = require('../models/users');
const Address = require('../models/address');


// router GET method
router.get('/', async (req, res)  => {
   const users = await Users.find().exec();

   const data = await Promise.all(users.map( async(user, index) => {
      const address = await Address.findById(user.address).exec()
      return {
         userId: user._id,
         id: index+1,
         name: user.name,
         jaya: user.jaya,
         address: address,
         miter: address.miter,
      }
   }))
   res.json(data)
});

router.get('/:section/:foor/:room', async (req,res) => {
   const user = req.params;
   const address = await Address.findOne({section: user.section, foor: user.foor, room: user.room}).exec()

   try{
      const user_add = await Users.findOne({address: address._id}).exec();
      res.json({
         userId: user._id,
         name: user_add.name,
         jaya: user_add.jaya,
         miter: [address.miter]
      })
   }catch(err) {
      res.json('no user')
   }   
})

// router POST method
router.post('/create', (req, res) => {
   const { name, jaya, section, foor, room, miter } = req.body;
   
   try{
      const address = Address({
         section: section,
         foor: foor,
         room: room,
         miter: miter
      })
      address.save()

      const users = Users({
         name: name,
         jaya: jaya,
         address: address._id
      })
      users.save()

      res.status(200).send('create user successfull')
   }catch(err) {
      console.error(err)
   }
   
})

module.exports = router;