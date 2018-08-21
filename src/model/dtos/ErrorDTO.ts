
export class ErrorDTO {

    title: string; // a short, human-readable summary of the problem.
    detail?: string; // a human-readable explanation specific to this occurrence of the problem.

    constructor(title: string, detail?: string) {
        this.title = title;
        this.detail = detail;
    }
}