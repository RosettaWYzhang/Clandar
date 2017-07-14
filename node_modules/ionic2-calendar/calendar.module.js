import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { MonthViewComponent } from './monthview';
import { WeekViewComponent } from './weekview';
import { DayViewComponent } from './dayview';
import { CalendarComponent } from './calendar';
import { initPositionScrollComponent } from './init-position-scroll';
var NgCalendarModule = (function () {
    function NgCalendarModule() {
    }
    return NgCalendarModule;
}());
export { NgCalendarModule };
NgCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MonthViewComponent, WeekViewComponent, DayViewComponent, CalendarComponent, initPositionScrollComponent
                ],
                imports: [IonicModule],
                exports: [CalendarComponent],
                entryComponents: [CalendarComponent]
            },] },
];
NgCalendarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=calendar.module.js.map