export interface ErrorCode{

    errorMessage(): void;

}

export class CandidateSignUpCodes implements ErrorCode{

    constructor() {}

    public errorMessage(): void{
        console.log('Llene los campos');
    }
}