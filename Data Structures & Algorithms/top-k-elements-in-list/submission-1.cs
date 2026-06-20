public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> group = new Dictionary<int, int>();

        Array.Sort(nums);

        for (int i = 0; i < nums.Length; i++) {
            if (!group.ContainsKey(nums[i])) {
                group.Add(nums[i], 1);
            } else {
                group[nums[i]]++;
            }
        }

        List<int[]> arr = group.Select(g => new int[]{g.Value, g.Key}).ToList();
        arr.Sort((a, b) => b[0].CompareTo(a[0]));

        int[] res = new int[k];
        for (int i = 0; i < res.Length; i++) {
            res[i] = arr[i][1];
        }

        return res;
    }
}
