/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    children: [],
    spouse: '',
    gender: 'F'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    children: [],
    spouse: '',
    gender: 'F'
  }, {
    provider: 'local',
    role: 'local',
    name: 'Daisy Wong',
    email: 'daisy@gmail.com',
    password: '1234',
    children: ['luke@gmail.com'],
    spouse: 'donald@gmail.com',
    gender: 'F'
  }, {
    provider: 'local',
    role: 'local',
    name: 'Donald Wong',
    email: 'donald@gmail.com',
    password: '1234',
    children: ['luke@gmail.com'],
    spouse: 'daisy@gmail.com',
    gender: 'M'
  },
  {
    provider: 'local',
    role: 'local',
    name: 'Luke Wong',
    email: 'luke@gmail.com',
    password: '1234',
    children: [],
    spouse: '',
    gender: 'M'
  }, function() {
      console.log('finished populating users');
    }
  );
});