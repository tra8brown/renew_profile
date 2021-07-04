const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('name', 'email', 'id', 'FLC');
    expect(intern.getSchool()).toEqual('FLC');
    expect(intern.getRole()).toEqual('Intern');
});