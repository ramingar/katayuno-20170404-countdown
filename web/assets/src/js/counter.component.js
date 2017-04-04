const counter = function (startingSeconds) {

    let currentSeconds = startingSeconds;

    const timeAfter = function (seconds) {
        return currentSeconds - seconds > 0 ? currentSeconds - seconds : 0;
    };

    return {
        timeAfter
    }
};

export default counter;
