public class Solution {
    public bool IsValidSudoku(char[][] board) {
        Dictionary<int, HashSet<char>> rows = new();
        Dictionary<int, HashSet<char>> cols = new();
        Dictionary<string, HashSet<char>> squares = new();

        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') continue;

                string squareKey = (row / 3) + "," + (col / 3);

                if ((rows.ContainsKey(row) && rows[row].Contains(board[row][col])) || 
                    (cols.ContainsKey(col) && cols[col].Contains(board[row][col])) ||
                    (squares.ContainsKey(squareKey) && squares[squareKey].Contains(board[row][col]))) 
                {
                    return false;
                }

                if (!rows.ContainsKey(row)) rows[row] = new HashSet<char>();
                if (!cols.ContainsKey(col)) cols[col] = new HashSet<char>();
                if (!squares.ContainsKey(squareKey)) squares[squareKey] = new HashSet<char>();

                rows[row].Add(board[row][col]);
                cols[col].Add(board[row][col]);
                squares[squareKey].Add(board[row][col]);
            }
        }

        return true;
    }
}
