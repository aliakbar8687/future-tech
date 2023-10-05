import { AbstractControl } from "@angular/forms";

export class CustomValidator {
    static onlyNumber(
        control: AbstractControl
        ): null | {[key: string]: boolean}
        {
            const value = control.value;

            if (/\D/.test(value)) return {digits: true};
            return null;
        }
}