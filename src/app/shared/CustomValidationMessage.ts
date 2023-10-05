export class CustomValidationMessage {
  static _validationMessage = {
        firstName: {
        required: 'Please provide First Name',
        minlength: 'First Name must be at least 4 characters long',
        },
        lastName: {
        required: 'Please provide Last Name',
        minlength: 'Last Name must be at least 4 characters long',
        },
        contact: {
        required: 'Please provide Contact Number',
        minlength: 'Contact Number must be at least 10 characters long',
        },
        password: {
        required: 'Please provide Password',
        minlength: 'Password must be at least 6 characters long',
        },
        role: {
        required: 'Please provide Role',
        },
    }

    static get validationMassage(){
        return this._validationMessage;
    }
}
