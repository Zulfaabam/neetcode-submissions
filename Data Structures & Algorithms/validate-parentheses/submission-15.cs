public class Solution {
    public bool IsValid(string s) {
        if (s.Length <= 1) return false;

        Dictionary<char, char> brackets = new() {
            {'(', ')'},
            {'{', '}'},
            {'[', ']'},
        };

        Stack<char> stack = new();

        foreach (char c in s) {
            if (brackets.ContainsKey(c)) {
                stack.Push(c);
            } else {
                if (stack.Count == 0 || brackets[stack.Pop()] != c) {
                    return false;
                }
            }
        }

        return stack.Count == 0;
    }
}
