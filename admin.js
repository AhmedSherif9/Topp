// models/admin.js

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  package: String,
  adminID: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Admin', adminSchema);

















// Remove a patient by username
router.delete('/removePatient/:username', async (req, res) => {
    try {
      const { username } = req.params;
       await Patient.findOneAndRemove({ username });
      res.json({ message: 'Patient removed successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Remove a doctor by username
// Remove a doctor by username
router.delete('/removeDoctor/:username', async (req, res) => {
    try {
      const { username } = req.params;
      await Doctor.findOneAndRemove({ username });
      res.json({ message: 'Doctor removed successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Remove an admin by adminID
router.delete('/removeAdmin/:adminID', async (req, res) => {
    try {
      const { adminID } = req.params;
       await Admin.findOneAndRemove({ adminID });
      res.json({ message: 'Admin removed successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Add a new package
router.post('/addPackage', async (req, res) => {
    try {
      const { package } = req.body;
      const newPackage = await Package.create({ package });
      res.status(201).json(newPackage);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Update a package by package ID
router.put('/updatePackage/:packageID', async (req, res) => {
    try {
      const { packageID } = req.params;
      const { package } = req.body;
       const updatedPackage = await Package.findByIdAndUpdate(packageID, { package }, { new: true });
      res.json(updatedPackage);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Delete a package by package ID
router.delete('/deletePackage/:packageID', async (req, res) => {
    try {
      const { packageID } = req.params;
       await Package.findByIdAndRemove(packageID);
      res.json({ message: 'Package deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // Add a new admin
router.post('/addAdmin', async (req, res) => {
    try {
      const { username, password } = req.body;
    const newAdmin = await Admin.create({ username, password });
      res.status(201).json(newAdmin);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  // View doctor information by username
router.get('/viewDoctorInfo/:username', async (req, res) => {
    try {
      const { username } = req.params;
       const doctorInfo = await Doctor.findOne({ username });
      res.json(doctorInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  