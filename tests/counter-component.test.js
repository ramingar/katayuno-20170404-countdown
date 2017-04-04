import test from 'tape';

// Component to test
import Counter from '../web/assets/src/js/counter.component'

// The goal for this test is to define the Component we'll use (Counter) and the function we'll call (timeAfter)
test('-------- Counter Component: When a second passes the counter decreases one second', (assert) => {
    const message = 'Expected 9';
    const expected = 9;

    const startSeconds = 10;
    const counter = Counter(startSeconds);

    const actual = counter.timeAfter(1);
    assert.equal(actual, expected, message);

    assert.end();
});

// The goal for this test is to check if Counter.timeAfter() returns another value depending on the time gone out
test('-------- Counter Component: When two seconds pass the counter decreases two seconds', (assert) => {
    const message = 'Expected 8';
    const expected = 8;

    const startSeconds = 10;
    const counter = Counter(startSeconds);

    const actual = counter.timeAfter(2);
    assert.equal(actual, expected, message);

    assert.end();
});

test('-------- Counter Component: Counter.timeAfter(100) must be "0" if timeAfter > Counter\'s time initialization', (assert) => {
    const message = 'Expected 0';
    const expected = 0;

    const startSeconds = 10;
    const counter = Counter(startSeconds);

    const actual = counter.timeAfter(100);
    assert.equal(actual, expected, message);

    assert.end();
});
