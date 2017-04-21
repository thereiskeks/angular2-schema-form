import { ChangeDetectorRef, EventEmitter, OnChanges, ViewContainerRef } from '@angular/core';
import { WidgetFactory } from './widgetfactory';
export declare class WidgetChooserComponent implements OnChanges {
    private widgetFactory;
    private cdr;
    widgetInfo: any;
    widgetInstanciated: EventEmitter<any>;
    container: ViewContainerRef;
    private widgetInstance;
    constructor(widgetFactory: WidgetFactory, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
}
