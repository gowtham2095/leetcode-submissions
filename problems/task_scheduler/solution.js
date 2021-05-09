/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let tasksFrequency = [];
    tasksFrequency.length = 26;
    tasksFrequency.fill(0);
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i].charCodeAt(0) - 65;
        tasksFrequency[task] = tasksFrequency[task] + 1;
    }
    tasksFrequency.sort((a, b) => b - a);
    
    let f_max = tasksFrequency[0];
    let idle_time = (f_max - 1) * n;
    
    for (let i = 1; i < tasksFrequency.length; i++) {
        
        // Idea behind this is for any consecutive tasks of the same frequency we can just place them in the tail
        // hence we do Min between f_max - 1 and the frequency
        idle_time  -= Math.min(f_max - 1, tasksFrequency[i]);
        // idle_time -= tasksFrequency[i]
    }
    
    idle_time = Math.max(0, idle_time);
    return idle_time + tasks.length;
    
};



// 'A' - 10

// idle_time 9

// idle_time -  18

