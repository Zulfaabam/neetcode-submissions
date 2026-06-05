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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null
        let current = head
        let next = null

        while (current !== null) {
            next = current.next
            console.log('next', next)
            current.next = prev
            console.log('current next', current.next)
            prev = current
            console.log('prev', prev)
            current = next
            console.log('current', current)
        }

        return prev
    }
}
