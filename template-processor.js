// Result message for Problems 1-3
var p1Message = 'SUCCESS';
var p2Message = 'SUCCESS';
var p3Message = 'SUCCESS';

// Keep track of all the var statements
var varDeclared = ['varDeclared', 'p1Message', 'p2Message', 'p3Message'];

class TemplateProcessor{
    constructor(template) {
        this.template = template;
    }
    fillIn(dictionary) {
        var temp = this.template;
        for (var key in dictionary) {
            var re = new RegExp('\\{\\{' + key + '\\}\\}');
            temp = temp.replace(re, dictionary[key]);
        }
        temp = temp.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
        return temp;
    }
}
if (typeof TemplateProcessor !== 'function') {
    console.error('TemplateProcessor is not a function', TemplateProcessor);
    p2Message = 'FAILURE';
} 
else{
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);
if (str !== 'My favorite month is July but not the day 1 or the year 2016') {
    console.error('TemplateProcessor didn\'t work');
    p2Message = 'FAILURE';
}
varDeclared.push('template');
varDeclared.push('dateTemplate');
varDeclared.push('dictionary');
varDeclared.push('str');
}
console.log(str);

// Case: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};

var str = dateTemplate.fillIn(dictionary2);
console.log(str);
// assert(str === 'My favorite month is but not the day 1 or the year 2016');