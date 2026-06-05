class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const lastIndex = new Map<string, number>()
        let maxLen = 0
        let start = 0

        for (let i = 0; i < s.length; i++) {
            const prev = lastIndex.get(s[i])

            if (prev !== undefined && prev >= start) {
                start = prev + 1
            }

            lastIndex.set(s[i], i)
            
            maxLen = Math.max(maxLen, i - start + 1)
        }

        return maxLen
    }
}
