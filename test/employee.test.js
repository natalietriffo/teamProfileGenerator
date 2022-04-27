const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Anne";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 99;
    const employeeInstance = new Employee("Anne", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "Anne@fakemail.com";
    const employeeInstance = new Employee("Anne", 99, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Anne";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 99;
    const employeeInstance = new Employee("Anne", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "Anne@fakemail.com";
    const employeeInstance = new Employee("Anne", 99, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Anne", 99, "Anne@fakemail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})