class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const arr = []

        for (let i = 0; i < nums.length; i++) {
            // nums.splice(i, 1)
            
            const multi = nums.filter((_, index) => index !== i).reduce((acc, curr) => acc * curr)

            console.log(multi)

            arr.push(multi)
        }

        return arr
    }
}
