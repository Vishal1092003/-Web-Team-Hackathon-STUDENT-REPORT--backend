const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { Student_name, batch, regisNo, department, dsa ,daa,dsd} = req.body;
    if (!Student_name || !batch || !regisNo || !department || !dsa|| !daa ||!dsd) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      Student_name,
      batch,
      regisNo,
      department,
      dsa,
      daa,
      dsd
      // image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
