const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' }); // Load from .env specifically

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Checking DB:', MONGODB_URI);

const userSchema = new mongoose.Schema({
  email: { type: String, lowercase: true, trim: true },
  password: { type: String },
  role: { type: String },
}, { strict: false }); // Use strict false to see whatever is there

const User = mongoose.model('User', userSchema);

async function checkUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const count = await User.countDocuments();
    console.log(`Total users in DB: ${count}`);

    const admin = await User.findOne({ email: 'admin@honhash.gov.ng' });
    if (admin) {
      console.log('Admin user FOUND:');
      console.log('ID:', admin._id);
      console.log('Email:', admin.email);
      console.log('Role:', admin.role);
      console.log('Password Hash:', admin.password);
    } else {
      console.log('Admin user NOT FOUND in this database.');
      // List all users to see if there's a mismatch
      const allUsers = await User.find({}, 'email role');
      console.log('Existing users:', allUsers);
    }

    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

checkUser();