public class Solution {
    public bool hasDuplicate(int[] nums) {
        bool hasDuplicate = false;

        HashSet<int> set = new HashSet<int>();

        foreach (int n in nums) {
            if (!set.Add(n)) {
                hasDuplicate = true;
                break;
            }
        }

        return hasDuplicate;
    }
}