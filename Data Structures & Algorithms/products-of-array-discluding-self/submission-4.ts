class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const arr = []

        for (let i = 0; i < nums.length; i++) {
            const multi = nums.filter((_, index) => index !== i).reduce((acc, curr) => acc * curr)

            arr.push(multi)
        }

        return arr
    }
}
