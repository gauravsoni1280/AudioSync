// controllers/userController.js
const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
      const uid = req.user.uid; // '02h0z2WShjTp5lzrMMZQmR1G0Wr2'
      console.log('Fetching profile for UID:', uid); // Add this log
      const user = await User.findOne({ uid });
      if (!user) {
          console.log('User not found in the database.');
          return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
  } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ message: "Server error" });
  }
};

exports.createUser = async (req, res) => {
    const { uid, name, email } = req.body
    try {
      let user = await User.findOne({ uid })
      if (!user) {
        user = await User.create({ uid, name, email })
      }
      res.status(200).json({ success: true, user })
    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, message: "Server error" })
    }
  }
  
