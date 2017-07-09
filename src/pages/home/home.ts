import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { FormFactory } from "../../factories/form-factory/form-factory";
import { FormValidator } from "../../forms/FormValidator";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    public listForm: FormValidator;

    public currentList = {
        name: '',
        street: '',
        city: '',
        gender: 0
    }

    public messages: string[] = [];

    public hideIcon: boolean = false;

    constructor(
        public navCtrl: NavController,
        private fb: FormBuilder,
    ) {
        this.listForm = FormFactory.createListForm(this.fb);
        this.listForm.createForm();
    }

    ionViewDidLoad(): void {
        this.messages.push('Field is required');
        this.messages.push('Field must be at least 2 characters long.');
        this.messages.push('Field cannot be more than 10 characters long.');
        this.messages.push('Only alpha-numeric values.');
    }

    public callError(): void {
    }
}
