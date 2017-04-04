import test from 'tape';

// Component to test


const myCounter = function (initialSeconds) {

    let actualSeconds = initialSeconds;
    const initialInstant = new Date();

    const timeRemaining = function () {
        const currentSeconds = (new Date()).getTime() / 1000;
        const initialInSeconds = initialInstant.getTime() / 1000;
        const diffSeconds = currentSeconds - initialInSeconds;
        return actualSeconds - Math.round(diffSeconds);
    };

    return {
        timeRemaining
    }
};

// Este test nos sirve para definir el objeto que vamos a usar myCounter y su timeRemaning
test('When a second passes the counter decreases one second', (assert) => {
    const message = 'Expected 9';
    const expected = 9;

    const startSeconds = 10;

    const aCounter = myCounter(startSeconds);

    setTimeout(function () {
        const actual = aCounter.timeRemaining();
        assert.equal(actual, expected, message);
    }, 1000);

    assert.end();
});

// Este nos obliga a que timeRemaining no nos devuelva siempre 9
test('When two seconds pass the counter decreases two seconds', (assert) => {
    const message = 'Expected 8';
    const expected = 8;

    const startSeconds = 10;

    const aCounter = myCounter(startSeconds);

    setTimeout(function () {
        const actual = aCounter.timeRemaining();
        assert.equal(actual, expected, message);
    }, 2000);

    assert.end();
});


