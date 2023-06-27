export const getDayOfWeek = () => {
    const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
    let today = new Date();

    let day = today.getDay();

    return days[day];
}

export const parseHour = (hour) => {
    let time = parseInt(hour.slice(0,2))
    let amOrPm

    if (time < 12) {
        amOrPm = 'AM'
    } else {
        amOrPm = 'PM'
    }

    return `${time % 12}:00 ${amOrPm}`
}

export const getClosingHour = (timeBlock) => { // format 09:00 - 22:00
    let openClose = timeBlock.split(' - ')
    let close = openClose[1]
    return parseHour(close);
}

export const getOpeningHour = (timeBlock) => { // format 9:00 - 11:00
    let openClose = timeBlock.split(' - ')
    let open = openClose[0]
    return parseHour(open);
}

export const closesAt = (timeBlock) => {
    let timesArr = timeBlock.split(' - ');
    let closingHour = timesArr[1].split(':')[0];

    return closingHour;
}

export const opensAt = (timeBlock) => {
    let timesArr = timeBlock.split(' - ');
    let openingHour = timesArr[0].split(':')[0];

    return openingHour;
}

export const openOrClosed = (timeBlock) => {
    let today = new Date();
    let hour = today.getHours();

    if (hour >= parseInt(opensAt(timeBlock)) && hour <= parseInt(closesAt(timeBlock))) {
        return true
    } else {
        return false
    }
}