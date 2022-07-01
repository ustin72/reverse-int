module.exports = function reverse (n) { 
    let str = String(n);
    if(n < 0) str = str.slice(1);
      
    let strRev = [];
    let j = str.length - 1;

    for (let i = 0; i<= str.length - 1; i++) {
        strRev[j] = str[i];
        j--;
    }

    return Number(strRev.join(''));
};