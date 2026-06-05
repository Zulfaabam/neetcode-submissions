/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root) return false
        
        function sameTree(root1, root2) {
            if (!root1 && !root2) return true

            if (!root1 || !root2 || root1.val !== root2.val) return false

            return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)
        }

        if (sameTree(root, subRoot)) return true

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
