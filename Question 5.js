function sortOnKeys(dict) {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}
var obj = {
    “id” : 4, “name1” : “abc1”,
    “id” : 10, “name1” : “abc2”,
    “id” : 5, “name1” : “abc3”,
    “id” : 6, “name1” : “abc5”
}
   

dict = sortOnKeys(obj);
