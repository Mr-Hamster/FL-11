const formatTime = (minutes) =>{
    let days = 0;
    let hours = 0;
    let result;
    if(minutes < 60){
        result = `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
        return result;
    } else {
        while(minutes >= 60){
            minutes -= 60;
            if(hours < 23){
                hours += 1;
            } else {
                hours=0;
                days += 1;
            }
        }
        result = `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
        return result;
    }  
}

formatTime(120);