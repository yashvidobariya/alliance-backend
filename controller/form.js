const express = require('express');
const router = express.Router();
const FormData = require('../model/form');

router.post('/addData', async (req, res) => {
  try {
    const formData = await FormData.create(req.body);
    console.log("Form data saved successfully", formData)
    res.status(200).send({ message: 'Form data saved successfully', formData });
  } catch (err) {
    console.error('Failed to insert data:', err);
    res.status(500).send({ error: 'Failed to save form data' });
  }
});

router.get('/getAllData', async (req, res) => {
  try {
    const formData = await FormData.findAll();
    res.status(200).send(formData);
  } catch (err) {
    console.error('Failed to retrieve data:', err);
    res.status(500).send({ error: 'Failed to retrieve data' });
  }
});

router.get('/getData/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const formData = await FormData.findByPk(id);

    if (!formData) {
      return res.status(404).send({ error: 'Data not found' });
    }

    res.status(200).send(formData);
  } catch (err) {
    console.error('Failed to retrieve data by ID:', err);
    res.status(500).send({ error: 'Failed to retrieve data' });
  }
});


module.exports = router;
