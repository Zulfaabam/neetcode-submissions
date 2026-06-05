class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const newArr = new Set(nums)

        return newArr.size !== nums.length
    }
}
