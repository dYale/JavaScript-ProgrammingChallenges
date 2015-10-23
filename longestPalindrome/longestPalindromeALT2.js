allPalindromesALT2

var longestPalindrome = function (string) { // 'aracecar'
    var string2 = string.split('').reverse().join(''); //reversed

    function findLongest(string, reversed) {
        var stringSub = string.substr(0, string.length - 1), //removes last letter //aracec
            reversedSub = reversed.substr(0, reversed.length - 1); //raceca

        if (!string.length || !reversed.length) return '' //base case
        else if (string.charAt(string.length - 1) === reversed.charAt(reversed.length - 1)) { //compare last letter
            return findLongest(stringSub, reversedSub) + string.charAt(string.length - 1); //if they're equal keep track
        } else {
            var first = findLongest(string, reversedSub),
                second = findLongest(stringSub, reversed); //comparing 
            if (first.length > second.length) return first
            else return second
        }
    }

    return findLongest(string, string2)
}