import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateProcessService {

  private readonly _currentOperationNumber = new BehaviorSubject<string>('');
  private readonly _currentIdProcess = new BehaviorSubject<string>('');
  private readonly _currentIdPhase = new BehaviorSubject<string>('');
  private readonly _currentIdStep = new BehaviorSubject<string>('');

  readonly currentOperationNumber$ = this._currentOperationNumber.asObservable();
  readonly currentIdProcess$ = this._currentIdProcess.asObservable();
  readonly currentIdPhase$ = this._currentIdPhase.asObservable();
  readonly currentIdStep$ = this._currentIdStep.asObservable();

  constructor() { }

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


}
