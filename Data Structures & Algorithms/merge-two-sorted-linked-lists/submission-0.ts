/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // console.log('1', list1.val, list1.next, list1)
        // console.log('2', list2)

        let dummy = new ListNode()
        let result = dummy
        let temp1 = list1
        let temp2 = list2

        while (temp1 !== null && temp2 !== null) {
            let prev = temp1
            let prev2 = temp2

            if (prev.val < prev2.val) {
                result.next = prev
                temp1 = temp1.next
            } else {
                result.next = prev2
                temp2 = temp2.next
            }

            result = result.next
        }

        // append remaining nodes
        if (temp1 !== null) {
            result.next = temp1;
        }

        if (temp2 !== null) {
            result.next = temp2;
        }

        return dummy.next
    }
}
