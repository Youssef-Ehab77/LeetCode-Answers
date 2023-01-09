const brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
};
let myStack = [];
var isValid = function (s) {
    if (s.length % 2 !== 0){
        return false;
    }
        
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[' || s[i] == '{' || s[i] == '(')
            myStack.push(s[i]);
        else if (s[i] !== brackets[myStack.pop()]) {
            return false;
        }
    }

    if (myStack.length == 0) {
        return true;
    }
    else {
        return false;
    }
};