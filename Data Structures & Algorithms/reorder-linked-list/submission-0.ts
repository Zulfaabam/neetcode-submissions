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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        const arr = []

        let current = head

        while (head !== null) {
            arr.push(head.val)

            head = head.next
        }

        const n = arr.length

        let odd = n - 1
        let even = 1

        for (let i = 1; i < arr.length; i++) {
            let idx;

            if (i % 2 === 0) {
                idx = even
                even += 1
            } else {
                idx = odd
                odd -= 1
            }

            current.next = new ListNode(arr[idx])
            current = current.next
        }
    }
}
