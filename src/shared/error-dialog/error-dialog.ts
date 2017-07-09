import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'error-dialog',
    templateUrl: 'error-dialog.html',
})

export class ErrorDialog {

    /**
     * 
     */
    @Input() type: number = 0;
    /**
     * 
     */
    @Input() inputSelector;
    /**
     * 
     */
    @Input() messages: string[] = [];
    /**
     * 
     */
    @Output() isInvalid: EventEmitter<boolean> = new EventEmitter()

    constructor(
    ) {}

    ngOnInit(): void {
        this.inputSelector._elementRef.nativeElement.addEventListener('input', evt => {
            this.isInvalid.emit(this.inputSelector.ngControl.invalid);
        })
    }

}
