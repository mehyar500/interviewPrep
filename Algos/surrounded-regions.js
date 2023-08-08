/**
 * 130. Surrounded Regions
Medium
7.6K
1.6K
Companies
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

Example 1:
https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
Example 2:

Input: board = [["X"]]
Output: [["X"]]

 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
    if (!board || !board.length) return;
    const rows = board.length;
    const cols = board[0].length;
  
    // Function to perform DFS
    const dfs = (row, col) => {
      if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== 'O') return;
      board[row][col] = 'E'; // Mark as escapee
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    };
  
    // Mark 'O's on borders and connected to borders
    for (let i = 0; i < rows; i++) {
      dfs(i, 0);
      dfs(i, cols - 1);
    }
    for (let i = 0; i < cols; i++) {
      dfs(0, i);
      dfs(rows - 1, i);
    }
  
    // Iterate over entire board and perform the flip
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === 'O') board[i][j] = 'X';
        if (board[i][j] === 'E') board[i][j] = 'O';
      }
    }
  }
  