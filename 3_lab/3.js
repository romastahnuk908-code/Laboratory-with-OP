function ipToNumber(ip = "127.0.0.1") {
    const parts = ip.split("."). map(Number);

    return parts.reduce((acc, byte, index) => {
        return acc + (byte << (24 - index * 8));
    }, 0);
}

console.log(ipToNumber());
console.log(ipToNumber("192.168.1.10"));