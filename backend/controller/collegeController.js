const Colleges = require("../model/CollegeModel");

//add college
const addCollege = (req, res) => {
  try {
    const { name, code, address, departments, email, url } = req.body;
    const newCollege = {
      name: name,
      code: code,
      address: address,
      departments: departments,
      email: email,
      url: url,
    };
    Colleges.insertOne(newCollege);
    res.status(200).json({ message: "new college record added successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to add college record" });
  }
};

//get all colleges
const getAllColleges = async (req, res) => {
  try {
    const foundColleges = await Colleges.find();
    //condition to send response with foundColleges empty
    if (foundColleges.length == 0) {
      res.status(404).json({ message: "colleges not found" });
    }
    //global successful response
    res.status(200).json({ foundColleges });
  } catch (error) {
    res.status(500).json({ message: "failed to retrieve data" });
  }
};

//delete college details
const deleteCollege = async (req, res) => {
  try {
    const deleteDocument = await Colleges.findByIdAndDelete(req.params.id);
    console.log(deleteDocument); //to check stored values in variable

    res.status(200).json({ message: "record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to college details" });
  }
};

//get college  based  on ID
const getCollegeBasedOnId = async (req, res) => {
  try {
    const foundCollege = await Colleges.findById(req.params.id);
    res.status(200).json({ foundCollege });
  } catch (error) {
    res.status(500).json({ message: "failed to get college details" });
  }
};

//update college details

const updateCollegeDetails = async (req, res) => {
  try {
    const updateCollegeDetails = req.body;
    const updatedCollege = await Colleges.findByIdAndUpdate(
      req.params.id,
      updateCollegeDetails,
      { new: true },
    );

    res.status(200).json({ message: "updated college details successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to update college details" });
  }
};

//update college mail
const updateEmail = async (req, res) => {
  try {
    const UpdatedEmail = await Colleges.findOneAndUpdate(
      {
        email: req.params.email,
      },
      { email: req.body.email },
      { new: true },
    );

    res.status(200).json({ message: "email updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to update email.." });
  }
};

module.exports = {
  addCollege,
  getAllColleges,
  deleteCollege,
  getCollegeBasedOnId,
  updateCollegeDetails,
  updateEmail
};
