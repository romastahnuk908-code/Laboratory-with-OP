 function random(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
consol.log(random(4, 6));
consol.log(random(4));