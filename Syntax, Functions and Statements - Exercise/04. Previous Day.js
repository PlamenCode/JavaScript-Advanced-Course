function previousDay(year, month, day){
    const nextDay = new Date(year, month - 1, day - 1);
    const newYear = nextDay.getFullYear();
    const newMonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}
previousDay(2016, 9, 30);
//2016-9-29
previousDay(2015, 5, 10);
//2015-5-9