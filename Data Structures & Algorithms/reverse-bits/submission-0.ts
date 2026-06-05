class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let res = 0

        for (let i = 0; i < 32; i++) {
            let bit = ((n >> i) & 1)

            if (bit) {
                res |= (1 << (31 - i))
            }
        }

        // force js to make it unsigned 32-bit int
        return res >>> 0
    }
}
