const express = require('express');
const router = express.Router();

// IMPORT MODULE 
const Address = require('../models/address');
const Users = require('../models/users')

router.get('/:section/:foor/:room', async (req, res) => {
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

module.exports = router;