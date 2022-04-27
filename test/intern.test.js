const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School";
    const employeeInstance = new Intern("Aaron", 96, "Aaron@fakemail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School";
    const employeeInstance = new Intern("Aaron", 96, "Aaron@fakemail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Aaron", 96, "Aaron@fakemail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});