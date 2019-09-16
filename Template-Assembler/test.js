var assembler = require("./index");

var mergeData = { FirstName: "bernard" };
var designData = JSON.parse('{"backgroundColor":{"conditions":[{"operationModel":{"predicateKey":"startsWith","targetField":{"type":"string","name":"FirstName"},"valueOperand":"b"},"conditionValue":"#8092ff"}],"defaultValue":"#b5b5b5"},"contentBackgroundColor":{"conditions":[],"defaultValue":"transparent"},"rows":[{"backgroundColor":"transparent","contentBackgroundColor":"transparent","mobileStack":false,"columns":[{"padding":{"left":0,"bottom":0,"right":0,"top":0},"backgroundColor":"transparent","widthInPixels":200,"borderDefinition":{"top":{"type":"solid","widthInPixels":0},"right":{"type":"solid","widthInPixels":0},"bottom":{"type":"solid","widthInPixels":0},"left":{"type":"solid","widthInPixels":0}},"elements":[],"id":885316},{"padding":{"left":0,"bottom":0,"right":0,"top":0},"backgroundColor":"transparent","widthInPixels":200,"borderDefinition":{"top":{"type":"solid","widthInPixels":0},"right":{"type":"solid","widthInPixels":0},"bottom":{"type":"solid","widthInPixels":0},"left":{"type":"solid","widthInPixels":0}},"elements":[{"padding":{"left":0,"bottom":0,"right":0,"top":0},"alignment":"center","widthInPercentage":100,"autoWidth":false,"backgroundColor":"transparent","test":"This is the button"},{"padding":{"left":0,"bottom":0,"right":0,"top":0},"alignment":"center","widthInPercentage":100,"autoWidth":false,"backgroundColor":"transparent","color":"#000"},{"padding":{"left":0,"bottom":0,"right":0,"top":0},"alignment":"center","widthInPercentage":100,"autoWidth":false,"backgroundColor":"transparent","content":"Enter your content here!"},{"padding":{"left":0,"bottom":0,"right":0,"top":0},"alignment":"center","widthInPercentage":100,"autoWidth":false,"backgroundColor":"transparent"}],"id":31327},{"padding":{"left":0,"bottom":0,"right":0,"top":0},"backgroundColor":"transparent","widthInPixels":200,"borderDefinition":{"top":{"type":"solid","widthInPixels":0},"right":{"type":"solid","widthInPixels":0},"bottom":{"type":"solid","widthInPixels":0},"left":{"type":"solid","widthInPixels":0}},"elements":[],"id":252281}]}]}');

var result = assembler.render(mergeData, designData);

console.log(result);