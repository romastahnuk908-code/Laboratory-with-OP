const iface = {
    m1: x => [x],
    m2: function(x, y) {
        return [x, y];
    },
    m3(x, y, z)   {
        return [x, y, z];

    }
}

function method (iface){
    const result = [];

    for ( i of Object.keys(iface)) {
        if (typeof iface[i] === 'function') {
            result.push ([i, iface[i].length]);
       }       
   }
return result;
}

console.log(method(iface));