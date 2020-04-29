import * as moment from 'moment';
export class TimestampToDate {

    public static timestampToDate(timestamp: number) {
        return new Date(timestamp * 1000);
    }

}
