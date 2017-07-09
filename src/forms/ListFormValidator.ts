import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from "./FormValidator";

export class ListFormValidator extends FormValidator{

    constructor(
        protected fb: FormBuilder,
    ) {
        super();
    }

    public createForm(): void{
        this.formData = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
            street: ['', Validators.required],
            city: ['',  Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9 ]+$/i)])],
            gender: ['', Validators.required],
        });
    }

    public validateForm(): boolean{
        return this.formData.valid;
    }

}