class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let count = 0

        for (let i = 0; i < 32; i++) {
            // Create a mask (e.g., 1, 2, 4, 8...)
            let mask = 1 << i; 
            
            // Check if the bit at position i is set
            let bit = n & mask;

            if (bit) {
                count += 1
            }
        }

        return count
    }
}
