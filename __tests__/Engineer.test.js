const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');
    expect(engineer.getGithub()).toEqual('github');
    expect(engineer.getRole()).toEqual('Engineer');
});