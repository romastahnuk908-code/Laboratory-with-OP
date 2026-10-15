'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Ronaldo', phone: '+380070770777' },
  { name: 'Usyk', phone: '+380980101010' },
];

const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name) {
      return i.phone;
    }
  }
  return null;
};

module.exports = { phonebook, findPhoneByName };
