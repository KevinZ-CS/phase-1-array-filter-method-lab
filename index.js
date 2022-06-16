function findMatching(drivers, name) {
    const newList = drivers.filter(eachDriver => name.toUpperCase() === eachDriver.toUpperCase());
    return newList;
}

function fuzzyMatch(drivers, name) {
    const newList = drivers.filter(eachDriver => eachDriver.substr(0, 2).includes(name));
    return newList;
}

function matchName(drivers, driverName) {
    const newList = drivers.filter(eachDriver => eachDriver.name === driverName);
    return newList;
}