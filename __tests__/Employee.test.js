const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    var name = "name";
    var id = 'id';
    var email = "email";
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(name);
    expect(employee.getId()).toEqual(id);
    expect(employee.getEmail()).toEqual(email);
    expect(employee.getRole()).toEqual('Employee');
});