/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let opened = {0: 1};
    let stackKeys = rooms[0];

    while (stackKeys.length) {

        let stkTop = stackKeys.pop();

        if (!opened.stkTop)
            stackKeys.concat(rooms[stkTop]);

        if (opened.stkTop === null)
            opened.stkTop = 1;

    }

    return opened.size === rooms.length;

};

console.log(canVisitAllRooms([[1], [2], [3], []]));