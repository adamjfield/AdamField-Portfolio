const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    contactName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        'Not a valid email address!',
      ],
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Contact = model('Contact', contactSchema);

module.exports = Contact;
