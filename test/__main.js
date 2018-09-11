var expect = require('chai').expect;
var test_unit = require('../dist/index.min');

describe("Arguments number", function() {
    it("should throw Error 'No arguments passed! You need to pass two Arrays to this function!' when no arguments has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays();
        }).to.throw('No arguments passed! You need to pass two Arrays to this function!');
    });

    it("should throw Error 'Only one argument passed! You need to pass two Arrays to this function!' when only one arguments has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays("");
        }).to.throw('Only one argument passed! You need to pass two Arrays to this function!');
    });

    it("should throw Error 'Too much arguments passed! You need to pass two Arrays to this function!' when too much arguments has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays("", "", "");
        }).to.throw('Too much arguments passed! You need to pass two Arrays to this function!');
    });
});

describe("'Not Arrays' as arguments", function() {
    it("should throw Error 'First argument is not an Array!' when two 'not Array' has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays("", "");
        }).to.throw('First argument is not an Array!');
    });

    it("should throw Error 'Second argument is not an Array!' when one Array and one 'Not Array' has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([], "");
        }).to.throw('Second argument is not an Array!');
    });

    it("should throw Error 'First argument is not an Array!' when one 'Not Array' and one Array has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays("", []);
        }).to.throw('First argument is not an Array!');
    });
});

describe("Empty Arrays as arguments", function() {
    it("should throw Error 'First Array is empty!' when two empty Arrays has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([], []);
        }).to.throw('First Array is empty!');
    });

    it("should throw Error 'Second Array is empty!' when one Array with content and one empty Array has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([""], []);
        }).to.throw('Second Array is empty!');
    });

    it("should throw Error 'First Array is empty!' when ne empty Array and one Array with content has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([], [""]);
        }).to.throw('First Array is empty!');
    });
});

describe("Invalid Arrays (not only numbers) as arguments", function() {
    it("should throw Error 'First Array does not contains only numbers!' when two Arrays invalid has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([3,4,5,""], [{},"",1]);
        }).to.throw('First Array does not contains only numbers!');
    });

    it("should throw Error 'Second Array does not contains only numbers!' when one valid Array and one invalid Array has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([3,4,5], [{},"",1]);
        }).to.throw('Second Array does not contains only numbers!');
    });

    it("should throw Error 'First Array does not contains only numbers!' when one invalid Array and one valid Array has been passed", function() {
        expect(function(){
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([{},"",1], [3,4,5]);
        }).to.throw('First Array does not contains only numbers!');
    });
});

describe("Valid Arrays as arguments", function() {
    it("should return [1] when [1,1,1,1,1] and [1,1,1] has been passed", function() {
        expect(
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
                [1,1,1,1,1],
                [1,1,1]
            )
        ).to.be.eql([1]);
    });

    it("should return [1,2,3] when [1,2,1,2,3,1] and [1,2,2,2,3,3] has been passed", function() {
        expect(
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
                [1,2,1,2,3,1],
                [1,2,2,2,3,3]
            )
        ).to.be.eql([1,2,3]);
    });

    it("should return [1,3] when [1,3,4,5] and [1,3,8] has been passed", function() {
        expect(
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
                [1,3,4,5],
                [1,3,8]
            )
        ).to.be.eql([1,3]);
    });

    it("should return [1,7,11,17] when [7,1,19,12,11,17] and [8,2,512,12,1,17,11,33,7] has been passed", function() {
        expect(
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
                [7,1,19,12,11,17],
                [8,2,512,12,1,17,11,33,7]
            )
        ).to.be.eql([1,7,11,17]);
    });

    it("should return [11,17] when [4,8,12,46,54,32,11,17] and [17,4,10,12,16,20,40,11] has been passed", function() {
        expect(
            test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
                [4,8,12,46,54,32,11,17],
                [17,4,10,12,16,20,40,11]
            )
        ).to.be.eql([11,17]);
    });
});