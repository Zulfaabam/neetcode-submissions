public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int l = 0;
        int r = numbers.Length - 1;

        int[] indexes = new int[2];

        while (l < r) {
            if (numbers[l] + numbers[r] == target) {
                indexes[0] = l + 1;
                indexes[1] = r + 1;
                break;
            }

            if (numbers[l] + numbers[r] > target) {
                r--;
            } else {
                l++;
            }
        }

        return indexes;
    }
}
