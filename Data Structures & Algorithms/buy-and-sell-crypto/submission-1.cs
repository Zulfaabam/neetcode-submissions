public class Solution {
    public int MaxProfit(int[] prices) {
        int l = 0;
        int r = l + 1;

        int profit = 0;

        while (r < prices.Length) {
            if (prices[r] > prices[l]) {
                profit = Math.Max(profit, prices[r] - prices[l]);
            } else {
                l = r;
            }

            r += 1;

            Console.WriteLine(profit);
        }

        return profit;
    }
}
