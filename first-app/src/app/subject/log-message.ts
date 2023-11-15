import { ILogMessage } from "./i-log-message";

export class LogMessage implements ILogMessage {

     private _message: string;
     private _date: Date;

    constructor(message: string, timestamp: Date) {
        this._message = message;
        this._date = timestamp;
    }

    get message(): string {
        return this._message;
    }

    get date(): Date {  
        return this._date;
    }

    public toString(): string {
        return this._date.toLocaleString()+' - '+this._message;
    }
    
}
