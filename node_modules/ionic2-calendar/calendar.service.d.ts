import { Observable } from "rxjs/Observable";
import { ICalendarComponent, CalendarMode, QueryMode } from './calendar';
export declare class CalendarService {
    queryMode: QueryMode;
    currentDateChangedFromParent$: Observable<Date>;
    currentDateChangedFromChildren$: Observable<Date>;
    eventSourceChanged$: Observable<void>;
    private _currentDate;
    private currentDateChangedFromParent;
    private currentDateChangedFromChildren;
    private eventSourceChanged;
    constructor();
    setCurrentDate(val: Date, fromParent?: boolean): void;
    readonly currentDate: Date;
    rangeChanged(component: ICalendarComponent): void;
    private getStep(mode);
    getAdjacentCalendarDate(mode: CalendarMode, direction: number): Date;
    getAdjacentViewStartTime(component: ICalendarComponent, direction: number): Date;
    populateAdjacentViews(component: ICalendarComponent): void;
    loadEvents(): void;
}
