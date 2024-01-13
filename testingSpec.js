var expect = chai.expect;

// WRITE YOUR TESTS HERE!

describe("replaceWith", function(){
    it("returns string with the characters from the string replaced with the parameters", function(){
        expect(replaceWith("awesome", "e", "z")).to.equal("awzsomz");
        
    });
    it("case sensitive", function(){
        expect(replaceWith("Foo", "F", "B")).to.equal("Boo");
    })
});

describe("expand", function(){
    it("returns an array with mutiplies of the array's copies appended to the original array", function(){
        expect(expand([1,2,3], 3)).to.deep.equal([1,2,3,1,2,3,1,2,3]);
    });
});

describe("acceptNumbersOnly", function(){
    it("returns true if all are numbers", function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.equal(true);
    });
    it("returns false for NAN", function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.equal(false);
    });
    it("returns false if not all of them are numbers", function(){
        expect(acceptNumbersOnly(1,"foo")).to.equal(false);
    });
});

 describe("mergeArrays", function(){
    it("returns sorted merged array", function(){
        expect(mergeArrays([2,1],[3,4])).to.deep.equal([1,2,3,4])
    });
 });

 describe("mergeObjects", function(){
    it("returns merged object", function(){
        expect(mergeObjects(obj1= {
            name: "Foo",
            num: 33
        }, obj2 = {
            test: "thing",
            num: 55
        })).to.deep.equal({
            name: "Foo",
            num: 55,
            test: "thing"
            
        })
    });
 });
