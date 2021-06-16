import { Component } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {



constructor( ) { }


minDate: Date = new Date(1975, 0, 29);
maxDate: Date = new Date(2045, 4, 12);

onDatePickerLoaded(args) {
    // const datePicker = args.object as DatePicker;
}

onDateChanged(args) {
    console.log("Date New value: " + args.value);
    console.log("Date value: " + args.oldValue);
}

onDayChanged(args) {
    console.log("Day New value: " + args.value);
    console.log("Day Old value: " + args.oldValue);
}

onMonthChanged(args) {
    console.log("Month New value: " + args.value);
    console.log("Month Old value: " + args.oldValue);
}

onYearChanged(args) {
    console.log("Year New value: " + args.value);
    console.log("Year Old value: " + args.oldValue);
}

}
