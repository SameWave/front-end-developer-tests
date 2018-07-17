'use strict';

var jsonApi = require('jsonapi-server');
const userHandler = require('../handlers/userHandler');

jsonApi.define({
  resource: 'users',
  description: 'Users as in, you know, users of your app 🤷‍.',
  handlers: userHandler,
  attributes: {
    firstName: jsonApi.Joi.string()
      .alphanum()
      .required()
      .description("The user's first name")
      .example('John'),
    lastName: jsonApi.Joi.string()
      .alphanum()
      .required()
      .description("The user's last name")
      .example('Doe'),
    email: jsonApi.Joi.string()
      .email()
      .required()
      .description("The user's email address")
      .example('john.doe@example.com'),
    password: jsonApi.Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    phone: jsonApi.Joi.string(),
    interests: jsonApi.Joi.many('interests').description("All of the user's interests")
  },
  examples: [
    {
      id: 'cc5cca2e-0dd8-4b95-8cfc-a11230e73116',
      type: 'users',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'DeadMenDontTalk',
      phone: '+27831234567',
      interests: [
        { type: 'interests', id: '7541a4de-4986-4597-81b9-cf31b6762486' },
        { type: 'interests', id: 'd1762f6d-480d-4504-4986-6c52f78d6c51' },
        { type: 'interests', id: '68538177-7a62-4752-bc4e-8f971d253b42' }
      ]
    }
  ]
});
