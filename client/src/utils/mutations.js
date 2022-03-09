import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
  mutation addContact(
    $contactName: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    addContact(contactName: $contactName, email: $email, subject: $subject, message: $message) {
      _id
      contactName
      email
      subject
      message
    }
  }
`;
