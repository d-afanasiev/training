let newString = "AAABBBCCD",
    k = 1,
    n = [], 
    j = newString.charAt(0);

for (let i = 1; i <= newString.length; i++) {
        if (newString.charAt(i) == j) {
            k++;
    } else {
        if (k == 1) {
            n += j;
        } else {
            n += j + k;
        }
        j = newString.charAt(i);
        k = 1;
    }
}
console.log(n);