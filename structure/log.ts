export class Log {
    access: string;
    error: string;
    loglevel: string;

    constructor(a: string, e: string, l: string) {
        this.access = a;
        this.error = e;
        this.loglevel = l;
    }
}