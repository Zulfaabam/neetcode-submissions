class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sorted = strs.map(s => s.split('').sort().join(''))

        const groups = new Map<string, string[]>();

        for (let i = 0; i < sorted.length; i++) {
            if (!groups.has(sorted[i])) {
                groups.set(sorted[i], [])
            }

            groups.get(sorted[i]).push(strs[i])
        }

        return Array.from(groups.values())
    }
}
