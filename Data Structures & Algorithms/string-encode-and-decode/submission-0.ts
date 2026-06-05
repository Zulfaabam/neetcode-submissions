class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // if (strs)
        let encodedString = ''
        let newStrs = []

        for (const s of strs) {
            let enc = ''
            enc += s.length
            enc += '#'
            enc += s

            newStrs.push(enc)
        }

        encodedString = newStrs.join('')

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedString = []

        let i = 0;

        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j++
            }

            const len = parseInt(str.substring(i, j), 10)

            i = j + 1

            const s = str.substring(i, i + len)

            decodedString.push(s)

            i += len
        }

        return decodedString
    }
}
