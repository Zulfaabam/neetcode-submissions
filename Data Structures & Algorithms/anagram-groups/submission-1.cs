public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> dict = new();
        
        for (int i = 0; i < strs.Length; i++) {
            char[] c = strs[i].ToCharArray();
            Array.Sort(c);
            
            string newS = string.Concat(c);

            if (!dict.ContainsKey(newS)) {
                dict[newS] = new List<string>();
            }

            dict[newS].Add(strs[i]);
        }

        return dict.Values.ToList<List<string>>();
    }
}
