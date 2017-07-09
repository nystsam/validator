import { Injectable } from '@angular/core';
import { ErrorCode } from "./codes";

@Injectable()
export class ValidatorService{

    private code: ErrorCode;

    constructor() { }

    public setCode(_code: ErrorCode): void{
        this.code = _code;
    }

    public errorMessage(): void{
        this.code.errorMessage();
    }
}