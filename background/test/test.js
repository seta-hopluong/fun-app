var assert = require('assert');

describe('Array', () => {
    it('should return -1 when  the value ís not present', () => {
        assert.equal([1,3.5].indexOf(4), -1);
    });
});