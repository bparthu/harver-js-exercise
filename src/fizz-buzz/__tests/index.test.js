var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const {getFizzBuzz, getFizzBuzzSync} = require('../../fizz-buzz'); 


describe('fizz-buzz sync test', function () {
    it('should return FizzBuzz', function() {
        let i = 15;
        while(i<=100) {
            expect(getFizzBuzzSync(undefined, i)).to.equal('FizzBuzz');
            i += 15;
        }
    });
    
    it('should return Fizz', function () {
        let i = 3;
        while(i<=100) {
            if(i%15 !== 0)
                expect(getFizzBuzzSync(undefined, i)).to.equal('Fizz');
            i += 3;
        }
    });

    it('should return Buzz', function () {
        let i = 5;
        while(i<=100) {
            if(i%15 !== 0)
                expect(getFizzBuzzSync(undefined, i)).to.equal('Buzz');
            i += 5;
        }
    });

    it('should return random word', function () {
        let i = 1;
        while(i<=100) {
            if(i%15 !== 0 && i%3 !== 0 && i%5 !== 0){
                expect(getFizzBuzzSync(undefined, i)).to.not.equal('FizzBuzz');
                expect(getFizzBuzzSync(undefined, i)).to.not.equal('Fizz');
                expect(getFizzBuzzSync(undefined, i)).to.not.equal('Buzz');
                expect(getFizzBuzzSync(undefined, i)).to.be.a('string');
            }
            i += 1;
        }
    });

    it('should throw error at random intervals', function() {
        while(true) {
            try {
                getFizzBuzzSync({ withErrors: true }, 2);
            } catch (e) {
                expect(e.message).to.equal('It failed :(');
                break;
            }
        }
    });
});


describe('fizz-buzz async test', function () {
    it('should return FizzBuzz', function() {
        let i = 15;
        let FizzBuzzTasks = [];
        while(i<=100) {
            expect(getFizzBuzz(undefined, i)).to.eventually.equal('FizzBuzz');
            i += 15;
        }
    });

    it('should return Fizz', function() {
        let i = 3;
        while(i<=100) {
            if(i%15 !== 0)
                expect(getFizzBuzz(undefined, i)).to.eventually.equal('Fizz');
            i += 3;
        }
    });
   
    it('should return Buzz', function() {
        let i = 5;
        while(i<=100) {
            if(i%15 !== 0)
                expect(getFizzBuzz(undefined, i)).to.eventually.equal('Buzz');
            i += 5;
        }
    });

    it('should return random word', function () {
        let i = 1;
        while(i<=100) {
            if(i%15 !== 0 && i%3 !== 0 && i%5 !== 0){
                expect(getFizzBuzz(undefined, i)).to.eventually.not.equal('FizzBuzz');
                expect(getFizzBuzz(undefined, i)).to.eventually.not.equal('Fizz');
                expect(getFizzBuzz(undefined, i)).to.eventually.not.equal('Buzz');
                expect(getFizzBuzz(undefined, i)).to.eventually.be.a('string');
            }
            i += 1;
        }
    });
    
    it('should throw error at random intervals', function() {
        function next() {
            return getFizzBuzz({ withErrors: true }, 2)
                    .then((res) => {
                        return next()
                    });
        }
        expect(next()).to.eventually.be.rejectedWith(Error, 'It failed :(');
    });
    
});