class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let output: number[] = new Array(n + 1).fill(0)

        for (let i = 0; i <= n; i++) {
            // [i >> 1] add the bits count of half the value, prev calc
            // i & 1 adds 1 if curr odd, 0 if curr even
            output[i] = output[i >> 1] + (i & 1)
        }

        return output
    }
}
