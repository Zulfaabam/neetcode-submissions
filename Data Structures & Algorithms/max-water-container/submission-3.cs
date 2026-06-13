public class Solution {
    public int MaxArea(int[] heights) {
        int l = 0;
        int r = heights.Length - 1;

        int maxArea = 0;

        while (l < r) {
            int width = r - l;
            int height = Math.Min(heights[l], heights[r]); 

            int area = width * height;

            maxArea = Math.Max(maxArea, area);

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
