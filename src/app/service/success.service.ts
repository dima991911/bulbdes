import { Injectable } from '@angular/core';

@Injectable()
export class SuccessService {
    showMessage: boolean = false;

    toggleMessage(bool) {
        this.showMessage = bool;
    }
}