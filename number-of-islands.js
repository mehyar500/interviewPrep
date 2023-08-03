/**
 * 
 * 200. Number of Islands
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * Input: grid = [
 * ["1","1","1","1","0"],
 * ["1","1","0","1","0"],
 * ["1","1","0","0","0"],
 * ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Example 2:
 * Input: grid = [
 * ["1","1","0","0","0"],
 * ["1","1","0","0","0"],
 * ["0","0","1","0","0"],
 * ["0","0","0","1","1"]
 * ]
 * Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */

function dfs(grid, row, col) {
    // If the current cell is out of bounds or is '0' (water or visited land), 
    // we just return from the function.
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
        return;
    }

    // Mark the current cell as visited by setting its value to '0'
    grid[row][col] = '0';

    // Call DFS on each of its neighbors in the north, south, east, and west directions
    dfs(grid, row - 1, col); // North
    dfs(grid, row + 1, col); // South
    dfs(grid, row, col - 1); // West
    dfs(grid, row, col + 1); // East
}

function numIslands(grid) {
    let count = 0;

    // Go through each cell in the grid
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            // If the current cell is '1' (land), we perform a DFS from this cell
            // and increment our count, because we've found a new island
            if(grid[row][col] === '1') {
                dfs(grid, row, col);
                count++;
            }
        }
    }
    
    return count; // Return the total number of islands found
}
