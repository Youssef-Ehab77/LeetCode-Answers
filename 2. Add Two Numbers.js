/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0, sum = 0;
    let result = new ListNode();
    let temp = result;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        }
        temp.next = new ListNode(sum, null);
        temp = temp.next;
        sum = carry;
        carry = 0;
    }
    return result.next;
};

let l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
let l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};

console.log(addTwoNumbers(l1, l2));
/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

/************************** Answer 2 *************************************/
//     let carry = 0;
//     let result = new ListNode();
//     let temp = result;
//     while (l1 !== null && l2 !== null) {
//         temp.val = (carry + (l1.val + l2.val)) % 10;
//         carry = Math.floor((l1.val + l2.val + carry) / 10);
//         l1 = l1.next;
//         l2 = l2.next;
//         if (l2 !== null && l1 !== null) {
//             temp.next = new ListNode();
//             temp = temp.next;
//         }
//     }
//     if (l1 !== null || l2 !== null || carry !== 0)
//         appendList(temp, ((l1 === null) ? l2 : l1), carry);

//     return result;
// };

// var appendList = function (temp, l, carry) {
//     if (carry === 0)
//         temp.next = l;
//     else {
//         while (carry !== 0 && l !== null) {
//             let val = (l.val + carry) % 10;
//             carry = Math.floor((l.val + carry) / 10);
//             temp.next = new ListNode(val, null);
//             temp = temp.next;
//             l = l.next;
//         }
//         temp.next = l;
//         if(carry !== 0)
//             temp.next = new ListNode(carry,null);
//     }
//};