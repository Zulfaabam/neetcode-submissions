public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        char[] sArr = s.ToCharArray();
        Array.Sort(sArr);

        char[] tArr = t.ToCharArray();
        Array.Sort(tArr);

        return sArr.SequenceEqual(tArr);
    }
}
