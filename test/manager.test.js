const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 98;
    const employeeInstance = new Manager("Amanda", 98, "Amanda@fakemail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 98;
    const employeeInstance = new Manager("Amanda", 98, "Amanda@fakemail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Amanda", 98, "Amanda@fakemail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
});