class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newNums = new Set(nums)
        let longestStreak = 0

        for (let num of newNums) {
            if (!newNums.has(num - 1)) {
                let currNum = num
                let streak = 1

                while (newNums.has(currNum + 1)) {
                    currNum += 1
                    streak += 1
                }

                longestStreak = Math.max(longestStreak, streak)
            }
        }

        return longestStreak
    }
}
