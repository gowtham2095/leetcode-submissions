/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
function constructWareHouseLimit(warehouse) {
    let limitArray = [];
    let min = Infinity;
    for (let i = 0; i < warehouse.length; i++) {
        min = Math.min(min, warehouse[i]);
        limitArray.push(min);
    }
    return limitArray;
}
function pickABoxWithAtmostGivenHeight(boxes, height) {
    let index = null;
    let max = -Infinity;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] > height)
          return index;
        if (boxes[i] <= height && boxes[i] > max) {
            max = Math.max(max, boxes[i]);
            index = i;
        }
    }
    return index;
}
var maxBoxesInWarehouse = function(boxes, warehouse) {
    let count = 0;
    boxes.sort((a, b) => a - b);
    let warehouseLimit = constructWareHouseLimit(warehouse);
    for (let i = warehouse.length - 1; i >=0; i--) {
        let index = pickABoxWithAtmostGivenHeight(boxes, warehouseLimit[i]);
        if (index !== null) {
            boxes.splice(index, 1);
            count++;
        }
    }
    console.log(boxes)
    return count;
};




