const arr = [
    "hello",
    null,
    undefined,
    'Roman',
    ' I am 17 years old',
    17,
    2026,
    -30,
    true, 
    false
];

const collection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
};

for (const item of arr) {
    const type = typeof item;
    if (type === 'number' && item === 17) {
        collection.number++;
    } else {collection[type]++;

    }
}
console.dir(collection);