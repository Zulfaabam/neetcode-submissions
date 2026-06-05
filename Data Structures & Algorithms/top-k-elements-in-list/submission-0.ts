class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const groups = new Map<number, number>()

        for (const num of nums) {
            if (!groups.has(num)) {
                groups.set(num, 0)
            }

            groups.set(num, nums.filter(n => n === num).length)
        }

        const arr = []

        groups.forEach((val, key, map) => {
            arr.push({
                idx: key,
                length: val
            })
        })

        const sortedArr = arr.sort((a, b) => {
            return b.length - a.length
        })

        return sortedArr.slice(0, k).map(s => s.idx)
    }
}
