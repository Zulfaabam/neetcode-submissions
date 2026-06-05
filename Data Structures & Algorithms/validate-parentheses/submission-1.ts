class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        const arr = []

        for (let i = 0; i < s.length; i++) {
            if (Object.keys(pairs).includes(s[i])) {
                arr.push(s[i])
            } else {
                const last = arr.pop()
                if (!last || pairs[last] !== s[i]) {
                    return false
                }
            }
        }

        return arr.length === 0
    }
}
