import {
    Component,
    OnInit,
    Input,
    ViewChild,
    OnDestroy,
    ElementRef
} from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

//Services
import { StateProcessService } from '@bid/bid-api-service';
import { StepsMeetingService } from '../../services/steps-meeting.service';
import { NotificationGlobalService } from '@bid/bid-handle-errors';
import { BidTranslateService } from '@bid/bid-translate';

//Model
import { DistributionListMember } from '@bid/bid-api-service';

import * as lodash from 'lodash';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bid-table-viewer',
    templateUrl: './table-viewer.component.html',
    styles: []
})
export class TableViewerComponent implements OnInit, OnDestroy {
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;
    @ViewChild('searchMembers') searchMembers: ElementRef;

    @Input() readonly: boolean;

    public gridView: DistributionListMember[];
    public addOpen: boolean;
    public addMsg: string;
    public memberToDelete: DistributionListMember;
    public deleteOpen: boolean;

    private members: DistributionListMember[];
    private subscriptionCollection: Subscription[] = [];

    constructor(
        private stateProcessService: StateProcessService,
        private meetingService: StepsMeetingService,
        private ngs: NotificationGlobalService,
        private translateService: BidTranslateService
    ) {}

    ngOnInit(): void {
        this.initGrid();
        this.initModalsState();
    }

    public onFilter(): void {
        const inputValue = this.searchMembers.nativeElement.value;
        this.gridView = process(this.members, {
            filter: {
                logic: 'or',
                filters: [
                    {
                        field: 'accountType',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'memberId',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'addedBy',
                        operator: 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    public saveHandler(membersToSave: DistributionListMember[]): void {
        this.subscriptionCollection.push(
            this.meetingService
                .postMeetingsMeetingId(
                    this.stateProcessService.currentMeeting.id,
                    membersToSave
                )
                .subscribe(() => {
                    this.ngs.showSuccess(
                        this.translateService.instant(
                            'PPR_DISTRIBUTIONEDIT_SAVE'
                        ),
                        1000
                    );
                    this.members = lodash.unionBy(
                        this.members,
                        membersToSave,
                        'memberId'
                    );
                    this.searchMembers.nativeElement.value = '';
                    this.onFilter();
                })
        );
    }

    public closeHandler(): void {
        this.addOpen = false;
    }

    public deleteHandler({ dataItem }): void {
        this.memberToDelete = dataItem;
        this.deleteOpen = true;
    }

    public confirmDelete(deleted: boolean): void {
        if (deleted) {
            this.subscriptionCollection.push(
                this.meetingService
                    .deleteMeetingsMeetingId(
                        this.stateProcessService.currentMeeting.id,
                        this.memberToDelete.id
                    )
                    .subscribe((deletedMember: DistributionListMember) => {
                        this.ngs.showSuccess(
                            this.translateService.instant(
                                'PPR_DISTRIBUTIONDELETE_MSG',
                                {
                                    memberId: deletedMember.memberId
                                }
                            ),
                            1000
                        );
                        this.members = this.members.filter(
                            member => member.id !== deletedMember.id
                        );
                        this.onFilter();
                    })
            );
        }
        this.memberToDelete = null;
        this.deleteOpen = false;
    }

    public showTooltip(e: MouseEvent): void {
        const element = e.target as HTMLElement;
        if (
            (element.nodeName === 'TD' || element.className === 'k-link') &&
            element.offsetWidth < element.scrollWidth
        ) {
            this.tooltipDir.toggle(element);
        } else {
            this.tooltipDir.hide();
        }
    }

    private initGrid(): void {
        this.members = this.stateProcessService.currentMeeting.distributionList.members;
        this.gridView = this.members;
    }

    private initModalsState(): void {
        this.deleteOpen = false;
        this.addOpen = false;
    }

    private unsubscribeAll(): void {
        this.subscriptionCollection.forEach(sub => sub.unsubscribe);
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }
}
