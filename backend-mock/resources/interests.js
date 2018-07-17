'use strict';

var jsonApi = require('jsonapi-server');
const interestHandler = require('../handlers/interestHandler');

jsonApi.define({
  resource: 'interests',
  description: 'The interests that a user could be, well, interested in.',
  handlers: interestHandler,
  attributes: {
    name: jsonApi.Joi.string()
      .description('The interest name')
      .example('Sports')
  },
  examples: [
    {
      id: '7541a4de-4986-4597-81b9-cf31b6762486',
      type: 'interests',
      name: 'Sport'
    },
    {
      id: '2a3bdea4-a889-480d-b886-104498c86f69',
      type: 'interests',
      name: 'Literature'
    },
    {
      id: '6ec62f6d-9f82-40c5-b4f4-279ed1765492',
      type: 'interests',
      name: 'Philosophy'
    },
    {
      id: '68538177-7a62-4752-bc4e-8f971d253b42',
      type: 'interests',
      name: 'Science'
    },
    {
      id: '279ed176-bc4e-4504-4752-d1762f78d6c5',
      type: 'interests',
      name: 'Cooking'
    },
    {
      id: '8d196606-134c-7a62-a93a-0d372f78d6c5',
      type: 'interests',
      name: 'Fitness'
    },
    {
      id: 'd1762f6d-480d-4504-4986-6c52f78d6c51',
      type: 'interests',
      name: 'Technology'
    },
    {
      id: '2a3b6606-134f-4504-693a-62f72f78d6c5',
      type: 'interests',
      name: 'Nature'
    }
  ]
});
