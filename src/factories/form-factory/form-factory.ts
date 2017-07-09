import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListFormValidator } from "../../forms/ListFormValidator";
import { FormValidator } from "../../forms/FormValidator";

export class FormFactory {

    public static createListForm(_fb: FormBuilder): FormValidator{
        return new ListFormValidator(_fb);
    }

}