var mergeTwoLists = function (list1, list2) {
   if (list1 == null) {
      return list2;
   }
   else if (list2 == null) {
      return list1;
   }

   let newList = new ListNode();
   const root = newList;

   while (list1 != null && list2 != null) {

      if (list1.val < list2.val) {
         newList.next = list1;
         list1 = list1.next;
      } else if (list2 != null) {
         newList.next = list2;
         list2 = list2.next;
      }
      newList = newList.next;
   }

   newList.next = list1 || list2;
   return root.next;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// var mergeTwoLists = function (list1, list2) {
//    if (list1 == null) {
//       return list2;
//    }
//    else if (list2 == null) {
//       return list1;
//    }

//    let newList = new ListNode();
//    const root = newList;

//    while (list1 != null || list2 != null) {

//       if (list1 != null && (list2 == null || list1.val <= list2.val)) {
//          newList.val = list1.val;
//          list1 = list1.next;

//          if (list1 != null || list2 != null) {
//             newList.next = new ListNode();
//             newList = newList.next;
//          }
//       } else if (list2 != null) {
//          newList.val = list2.val;
//          list2 = list2.next;

//          if (list2 != null || list1 != null) {
//             newList.next = new ListNode();
//             newList = newList.next;
//          }
//       }
//    }
//    return root;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// var mergeTwoLists = function (l1, l2) {
//    var mergedHead = { val: -1, next: null };
//    var crt = mergedHead;
//    while (l1 && l2) {
//       if (l1.val > l2.val) {
//          crt.next = l2;
//          l2 = l2.next;
//       } else {
//          crt.next = l1;
//          l1 = l1.next;
//       }
//       crt = crt.next;
//    }
//    crt.next = l1 || l2;

//    return mergedHead.next;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// var mergeTwoLists = function(l1, l2) {
//    if(!l1 || !l2) return (l1? l1:l2);
//    if(l1.val < l2.val) {
//      l1.next = mergeTwoLists(l1.next, l2);
//      return l1;
//    } else {
//      l2.next = mergeTwoLists(l1, l2.next);
//      return l2;
//    }
//  };