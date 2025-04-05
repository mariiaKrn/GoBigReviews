import { faker } from "@faker-js/faker";

export function getRandomEmail(): string {
    return faker.internet.email();
}

export function getRandomName(): string {
    return faker.person.fullName();
}

export function getInvalidEmail(): string {
    const invalidEmails = [
        "randomemail.com",  
        "random@.com",      
        "random@com",       
        "random @email.com", 
        "@email.com",       
        "random@email",      
    ];
    return faker.helpers.arrayElement(invalidEmails);
}