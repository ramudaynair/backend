const mongoose = require('mongoose');
function connectToDatabase() {
  mongoose.connect('mongodb+srv://ramudaynair:Aspire5315@cluster0.xxipblf.mongodb.net/form')
    .then(() => {
      console.log('Connected to MongoDB'); 
    })
}
module.exports = connectToDatabase;