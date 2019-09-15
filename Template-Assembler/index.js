const mustache = require("Mustache");
const fs = require('fs');

(function defineTemplateAssembler(global, factory) {
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
        factory(exports); // CommonJS
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global.TemplateAssembler = {};
        factory(global.TemplateAssembler); // script, wsh, asp
    }
}(this, function templateAssemblerFactory(assembler) {

    var conditionOperators = {
        string: {
            startsWith: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.startsWith(right);
            },
            startsWithIgnoreCase: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.toLowerCase().startsWith(right.toLowerCase());
            },
            endsWith: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.endsWith(right);
            },
            endsWithIgnoreCase: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.toLowerCase().endsWith(right.toLowerCase());
            },
            contains: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.includes(right);
            },
            containsIgnoreCase: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.toLowerCase().includes(right.toLowerCase());
            },
            equals: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left == right;
            },
            equalsIgnoreCase: function (left, right) {
                if (typeof left !== "string" || typeof right !== "string") return false;
                return left.toLowerCase() == right.toLowerCase();
            },
        },
        number: {

        },
        boolean: {},
        date: {}
    }

    assembler.conditionOperators = conditionOperators;

    var operatorResult = function (operationModel, data) {
        //Check that the operationModel is valid
        if (!(typeof operationModel.targetField === "object"
            && typeof operationModel.predicateKey === "string")) return false;

        var fieldKey = operationModel.targetField.name;
        var fieldType = operationModel.targetField.type;

        //If there is no property name or type then there is nothing to test
        if (typeof fieldKey !== "string" || typeof fieldType !== "string") return false;

        //Get the operator
        var operator = conditionOperators[fieldType] && conditionOperators[fieldType][operationModel.predicateKey];

        //If the operator was not found then return false
        if (typeof operator !== "function") return false;

        return operator(data[fieldKey], operationModel.valueOperand);

    }

    var operatorGroupResult = function (operator, data) {
        return false
    }


    assembler.render = function (mergeData, designData) {
        var template = fs.readFileSync(__dirname + '/template.mustache', 'utf8');

        var renderCondition = function () {
            //If this is not an object then just return its value
            if (!typeof (this) === "object") return this;

            //If conditions is not an array than return the defaultValue
            if (this.conditions instanceof Array) {
                for (var i = 0, cnt = this.conditions.length; i < cnt; i++) {
                    var condition = this.conditions[i];

                    var operationModel = condition.operationModel;
                    if (operatorResult(operationModel, mergeData)) {
                        return condition.conditionValue;
                    }
                    if (operatorGroupResult(operationModel, mergeData)) {
                        return condition.conditionValue
                    }
                }
            };

            return this.defaultValue;
        }

        var json = {
            fields: mergeData,
            design: designData,
            renderCondition: renderCondition
        }

        return mustache.render(template, json);
    }

    return assembler;

}));