const Engineer = require("../lib/Engingeer");

test("Can create a github.", () => {
    const testGithub = "Ash";
    const employeeInstance = new Engineer("Ash", 97,"Ash@fakemail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Ash";
    const employeeInstance = new Engineer("Ash", 97, "Ash@fakemail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Ash", 97, "Ash@fakemail.com", "Ashs Github");
    expect(employeeInstance.getRole()).toBe(returnValue);
});