'use strict';
const button = document.querySelector('button');
button.addEventListener('click', function () {
    this.style.background = 'red';
});

const nico = {
    name: 'nico',
    age: 24,
    addYear: function () {
        this.age++;
    },
    updateName() {
        this.name = 'jaeho';
    }
};
nico.updateName();
nico.addYear();
nico.addYear();
console.log(nico);