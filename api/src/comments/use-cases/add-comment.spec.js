'use strict';

const addComment = require('./add-comment');

describe('add comment', () => {
  it('adds comment to db', () => {
    expect(addComment('foo')).toEqual('Added foo');
  });
});
