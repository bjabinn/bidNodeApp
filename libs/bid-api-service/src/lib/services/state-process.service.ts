import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meeting } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class StateProcessService {
    private readonly _currentOperationNumber = new BehaviorSubject<string>('');
    private readonly _currentIdProcess = new BehaviorSubject<string>('');
    private readonly _currentIdPhase = new BehaviorSubject<string>('');
    private readonly _currentIdStep = new BehaviorSubject<string>('');
    private readonly _currentIdCode = new BehaviorSubject<string>('');
    private readonly _currentMeeting = new BehaviorSubject<Meeting>(null);

    readonly currentOperationNumber$ = this._currentOperationNumber.asObservable();
    readonly currentIdProcess$ = this._currentIdProcess.asObservable();
    readonly currentIdPhase$ = this._currentIdPhase.asObservable();
    readonly currentIdStep$ = this._currentIdStep.asObservable();
    readonly currentIdCode$ = this._currentIdCode.asObservable();
    readonly currentMeeting$ = this._currentMeeting.asObservable();

    constructor() {}

    get currentOperationNumber(): string {
        return this._currentOperationNumber.getValue();
    }

    set currentOperationNumber(val: string) {
        this._currentOperationNumber.next(val);
    }

    get currentIdProcess(): string {
        return this._currentIdProcess.getValue();
    }

    set currentIdProcess(val: string) {
        this._currentIdProcess.next(val);
    }

    get currentIdPhase(): string {
        return this._currentIdPhase.getValue();
    }

    set currentIdPhase(val: string) {
        this._currentIdPhase.next(val);
    }

    get currentIdStep(): string {
        return this._currentIdStep.getValue();
    }

    set currentIdStep(val: string) {
        this._currentIdStep.next(val);
    }

    get currentIdCode(): string {
        return this._currentIdCode.getValue();
    }

    set currentIdCode(val: string) {
        this._currentIdCode.next(val);
    }

    get currentMeeting(): Meeting {
        return this._currentMeeting.getValue();
    }

    set currentMeeting(val: Meeting) {
        this._currentMeeting.next(val);
    }
}
