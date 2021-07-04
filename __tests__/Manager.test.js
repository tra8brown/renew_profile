const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    var officeNumber = "8011234567";
    const manager = new Manager('name', 'email', 'id', officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
    expect(manager.getRole()).toEqual('Manager');
});