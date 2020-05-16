import { MockErrorService } from './mock-error.service';
import { TvDemoService } from '@bid/bid-api-service';
import { Component, OnInit } from '@angular/core';
import { NotificationGlobalService } from '@bid/bid-handle-errors';

@Component({
  selector: 'bid-error-handler',
  templateUrl: './error-handler.component.html',
  styles: []
})
export class ErrorHandlerComponent implements OnInit {

  constructor(private apiService: TvDemoService, private mockService: MockErrorService, private ngs: NotificationGlobalService) { }

  ngOnInit(): void {
  }

  showNotFoundError(): void {
    this.apiService.getShow(100000000000).subscribe(data => {
      console.log('No debe entrar aqui! -> ', data);
    });
  }

  show500ErrorUnknow(): void {
    this.mockService.getInternalErrorUnknow().subscribe(data => {
      console.log('No debe entrar aqui! -> ', data);
    });
  }

  show500Errorknow(): void {
    this.mockService.getInternalErrorKnow().subscribe(data => {
      console.log('No debe entrar aqui! -> ', data);
    });
  }
  showSuccess(): void {
    this.ngs.showSuccess('Success!');
  }
  showInfo(): void {
    this.ngs.showInfo('Info!');
  }
  showWarning(): void {
    this.ngs.showWarning('Warning!');
  }
  showDanger(): void {
    this.ngs.showError('Error!');
  }
}
