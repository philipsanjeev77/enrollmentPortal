export class CustomValidator {
    static emailValidator(value:any): any {
 
        if (value.pristine) {
           return null;
        }
        const SATRING_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        value.markAsTouched();
        if (SATRING_REGEXP.test(value.value)) {
           return null;
        }
        return {
           invalidFormat: true
        };
     }
}

