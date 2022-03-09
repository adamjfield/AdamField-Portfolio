const Contact = require('../models');

const resolvers = {
  Query: {
    contacts: async () => {
      return Contact.find();
    },
  },
  Mutation: {
    addContact: async (parent, args) => {
      const contact = await Contact.create(args);
      return contact;
    },
  },
};

module.exports = resolvers;
