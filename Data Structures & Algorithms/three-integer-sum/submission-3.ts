class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let arrNum = []

        const groups = new Map<string, number[]>()
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        const triplet = [nums[i], nums[j], nums[k]];
                        groups.set(triplet.join(','), triplet);
                    }
                }
            }
        }

        arrNum = Array.from(groups.values())

        return arrNum
    }
}