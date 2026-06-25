public class Solution {
    public int MajorityElement(int[] nums) {
        int median = nums.Length / 2;

        Dictionary<int, int> group = new();

        foreach (int n in nums) {
            if (!group.ContainsKey(n)) group.Add(n, 1);

            group[n]++;
        }

        Console.WriteLine(group.Where(g => g.Value > median).Select(g => g.Key).ToList()[0]);
        
        return group.Where(g => g.Value > median).Select(g => g.Key).ToList()[0];
    }
}