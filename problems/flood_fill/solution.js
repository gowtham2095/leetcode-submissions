/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

function dfs(image, i, j, newColor, color) {
    if (i < 0 || j < 0 || i > image.length - 1 || j > image[0].length - 1 || image[i][j] != color)
        return;
    image[i][j] = newColor
    dfs(image, i + 1, j, newColor, color);
    dfs(image, i - 1, j, newColor, color);
    dfs(image, i, j + 1, newColor, color);
    dfs(image, i, j - 1, newColor, color);
}

function floodFillColor(image, sr, sc, newColor) {
    let color = image[sr][sc];
    if (color == newColor)
        return;
    dfs(image, sr, sc, newColor, color);
}

var floodFill = function(image, sr, sc, newColor) {
    floodFillColor(image, sr, sc, newColor);
    return image;
};