const assert = require('assert');
const Rectangle = require('../rectangle');


describe('rectangle', () => {
  
  it('is a square', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is note a square', () => {
    const rectangle = new Rectangle(5, 6); 
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('is the good area', () => {
    const rectangle = new Rectangle(13, 7); 
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('is the good perimeter', () => {
    const rectangle = new Rectangle(13, 7); 
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });

});
