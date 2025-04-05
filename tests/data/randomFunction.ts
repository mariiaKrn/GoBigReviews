export function getRandomEmail() {
    const randomNum = Math.floor(Math.random() * 1000);
    return `test${randomNum}@mailqa.com`;
}

export function getRandomName() {
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Emily', 'David', 'Sophia', 'Michael', 'Olivia', 'William', 'Emma', 'James', 'Ava', 'Benjamin', 'Isabella', 'Lucas', 'Mia', 'Ethan', 'Charlotte'];
    return names[Math.floor(Math.random() * names.length)];
}

function randomNum(): number {
    return Math.floor(Math.random() * 1000);
}