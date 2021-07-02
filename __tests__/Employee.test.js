const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Potion.js');

test('creates employee object', () => {
    const employee = new Employee('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});