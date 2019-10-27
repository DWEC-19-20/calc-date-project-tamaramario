var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-13'),14)).to.equal('2019-10-31');
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-31'),-14)).to.equal('2019-10-11');
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-31'),-14)).to.equal('2019-10-11');
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-31'),-14)).to.equal('2019-10-11');
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-31'),-14)).to.equal('2019-10-11');
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date('2019-10-31'),-14)).to.equal('2019-10-11');
    });
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-10-31'))).to.equal(13);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-09-30'))).to.equal(-10);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-09-30'))).to.equal(-10);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-09-30'))).to.equal(-10);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-09-30'))).to.equal(-10);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date('2019-10-13'),new Date('2019-09-30'))).to.equal(-10);
    });
});
