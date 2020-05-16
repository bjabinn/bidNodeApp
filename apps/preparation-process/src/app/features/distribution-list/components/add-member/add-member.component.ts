import {
    Component,
    OnInit,
    Output,
    ViewChild,
    EventEmitter,
    Input,
    OnDestroy
} from '@angular/core';
import { StepsMeetingService } from '../../services/steps-meeting.service';
import { DistributionListMember } from '@bid/bid-api-service';
import { Subscription, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'bid-add-member',
    templateUrl: './add-member.component.html'
})
export class AddMemberComponent implements OnInit, OnDestroy {
    @ViewChild('select') select;
    @Input() active: boolean;
    @Output() save: EventEmitter<DistributionListMember[]> = new EventEmitter();
    @Output() closed: EventEmitter<void> = new EventEmitter();

    public addedMembers: DistributionListMember[];
    public members: Observable<DistributionListMember[]>;
    public loading: boolean;
    public searchText: string;
    public popupClass: string;

    private searchDebouncer$: Subject<string> = new Subject();
    private subscriptionCollection: Subscription[] = [];

    constructor(private meetingService: StepsMeetingService) {}

    ngOnInit(): void {
        this.initSearchDebouncer();
        this.initDefaults();
    }

    public searchMember(value: string): void {
        if (value.length >= 3) {
            this.searchText = value;
            this.members = new Observable<DistributionListMember[]>();
            this.select.loading = true;
            this.searchDebouncer$.next(value);
        }
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    public onSave(e): void {
        e.preventDefault();
        this.save.emit(this.addedMembers);
        this.closeForm();
    }

    public closeForm(): void {
        this.searchText = '';
        this.members = new Observable<DistributionListMember[]>();
        this.addedMembers = [];
        this.select.reset();
        this.closed.emit();
    }

    private initSearchDebouncer(): void {
        this.subscriptionCollection.push(
            this.searchDebouncer$
                .pipe(debounceTime(1500))
                .subscribe((value: string) => {
                    this.members = this.meetingService.search(value);
                    this.select.loading = false;
                })
        );
    }

    private initDefaults(): void {
        this.searchText = '';
        this.popupClass = 'k-popup--users';
    }

    private unsubscribeAll(): void {
        this.subscriptionCollection.forEach(sub => sub.unsubscribe);
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }
}
