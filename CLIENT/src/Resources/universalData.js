// export const baseURL = "http://localhost:7000"
export const baseURL = "https://medium365.herokuapp.com"


export function timeSince(timeStamp, date) {
    date = new Date(date)
    var now = new Date(),
        secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
        return parseInt(secondsPast) + 's';
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
        let day = date.getDate();
        let month = date.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
        let year = date.getFullYear() == now.getFullYear() ? "" : " " + date.getFullYear();
        return day + " " + month + year;
    }
}