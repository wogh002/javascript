let schedule = {};
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}
alert(isEmpty(schedule));
