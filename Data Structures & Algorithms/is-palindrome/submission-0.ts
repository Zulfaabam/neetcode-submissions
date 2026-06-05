class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const formattedStr = s.toLowerCase().replaceAll(' ', '').replace(/[^a-z0-9]/gi, '')

        let left = 0
        let right = formattedStr.length - 1

        while (left < right) {
            if (formattedStr[left] !== formattedStr[right]) {
                return false
            }

            left++
            right--
        }

        return true
    }
}
