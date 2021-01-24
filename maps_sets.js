//1
{1,2,3,4}

//2
"ref"

//3
0: {Array(3) => true}
1: {Array(3) => false}

//4
const hasDuplicate = (...arr) => {
    trialSet = new Set(arr);
    if(arr.length() != trialSet.size()) {
        return true;
    }
    return false;
}

//5
function isVowel(char) {
    return "aeiou".includes(char);
}

const vowelCount = (...arr) => {
    let vowelMap = new Map();
    for(char in arr) {
        if(isVowel(char)) {
            if(vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) +1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}