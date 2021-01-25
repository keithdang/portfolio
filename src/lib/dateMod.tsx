import { EndOfLineState } from "typescript";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var seconds = 60;
var minutes = 60;
var hours = 24;

function monthDiff(d1: Date, d2: Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

const plural = (num: number) => {return num > 1 ? 's' : ''}

const duration = (start: Date, end: Date) => {
    var ms = Math.abs(end.getTime()-start.getTime());
    var days = ms/(seconds*minutes*hours*1000) + 1;
    let sDuration: string;
    if(days >= 30){
        var months = monthDiff(start, end) + 1;
        if(months >= 11){
            var years = (months - months % 12) / 12;
            sDuration = years.toString() + ' year' + plural(years)
        }else{
            sDuration = months.toString() + ' month' + plural(months)
        }
    }else{
        sDuration = days.toString() + ' day' + plural(days)
    }
    return ' (' + sDuration + ')';
}


export const monthYear= (time: Date) =>{
    return months[time.getMonth()] + ' ' + time.getFullYear()
}

export const fromTo = (start: Date, end: Date) => {
    let datestring;
    if(start.getFullYear() == end.getFullYear()){
        if(start.getMonth() == end.getMonth()){
            if(start.getDate() == end.getDate()){
                datestring = months[start.getMonth()] + ' ' + start.getDate() + ' (1 day)'
            }else{
                datestring = months[start.getMonth()] + ' ' + start.getDate() + '-' + end.getDate() + duration(start, end)
            }
        }else{
            datestring = months[start.getMonth()] + '-' + months[end.getMonth()] + ' ' + start.getFullYear() + duration(start, end)
        }
    }else{
        datestring = months[start.getMonth()] + ' ' + start.getFullYear() + '-' + months[end.getMonth()] + ' ' + end.getFullYear() + duration(start, end)
    }
    return datestring;
}