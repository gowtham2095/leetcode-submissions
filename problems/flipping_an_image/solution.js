/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    if (image.length === 0)
        return null;
    image.forEach((row) => row.reverse());
    for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < image[0].length; j++) {
            image[i][j] = image[i][j] ^ 1;
        }
    }
    return image;
};