import { FormGroup } from '@angular/forms';

export abstract class FormValidator{

    protected formData: FormGroup

    constructor(
    ) {}

    public abstract createForm(): void;

    public abstract validateForm(): boolean;

    get form(): FormGroup{
        return this.formData;
    }

}