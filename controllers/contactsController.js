const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.postContacts = async(req,res)=>{
  const { avatar, name,email,dob,address,occupation } = req.body;
    try {
        const newContact = await Contact.create({ avatar, name,email,dob,address,occupation});
        const allContacts = await Contact.find();
        res.json(allContacts);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }



}
exports.updateContact = async (req, res) => {
    const {id} = req.params
    const { avatar, name,email,dob,address,occupation } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {avatar, name,email,dob,address,occupation},
      { new: true }
    );

    const allContacts = await Contact.find();
    res.json(allContacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteContact = async (req, res) => {
    const {id} = req.params

  try {
    await Contact.findByIdAndDelete(id);

    const allContacts = await Contact.find();
    res.json(allContacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
