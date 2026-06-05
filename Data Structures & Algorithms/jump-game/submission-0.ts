class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let maxReach = 0

        for (let i = 0; i < nums.length; i++) {
            if (maxReach < i) return false;

            maxReach = Math.max(maxReach, i + nums[i])

            if (maxReach >= nums.length - 1) return true
        }

        return true
    }
}
