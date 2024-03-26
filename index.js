// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("play football"));  // Output: "This Saturday, I want to play football!"
console.log(saturdayFun());  // Output: "This Saturday, I want to roller-skate!"



const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork("attend meetings"));  // Output: "This Monday, I will attend meetings."
console.log(mondayWork());  // Output: "This Monday, I will go to the office."



// Function to define wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction());  // Output: "You are special!"
console.log(encouragingPromptFunction("amazing"));  // Output: "You are amazing!"