import { Scroll } from 'ionic-angular';
import { EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
export declare class initPositionScrollComponent extends Scroll {
    initPosition: number;
    emitEvent: boolean;
    onScroll: EventEmitter<number>;
    private element;
    private scrollContent;
    private handler;
    private listenerAttached;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
