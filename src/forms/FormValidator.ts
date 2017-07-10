import { FormGroup } from '@angular/forms';

export abstract class FormValidator{
    
    /**
     * Form data used to generate the reactive form.
     */
    protected formData: FormGroup;
    /**
     * Messages dialogs for invalid fields.
     */
    protected messagesDialogs: string[] = [];

    constructor(
    ) {}

    /**
     * Create a reactive form.
     */
    public abstract createForm(): void;

    /**
     * Validate the current form.
     */
    public abstract validateForm(): boolean;

    get form(): FormGroup{
        return this.formData;
    }

    get messages(): string[]{
        return this.messagesDialogs;
    }

}