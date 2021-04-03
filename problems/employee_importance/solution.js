/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
function constructMap(employees) {
    let map = {};
    employees.forEach((employee) =>{
        map[employee.id] = {};
        map[employee.id].value = employee.importance;
        map[employee.id].subs = employee.subordinates;
    });
    return map;
}

function findValue(map, id) {
    let sum = 0;
    map[id].subs.forEach((employee) => {
        sum += findValue(map, employee);
    });
    return map[id].value + sum;
}

var GetImportance = function(employees, id) {
    let employeeMap = constructMap(employees);
    return findValue(employeeMap, id);
};



// 1 -> value: 5
//      subs: [2, 3]

// 2 -> value: 3
//      subs: []

// 3 -> value: 3
//      subs: []