import { Column } from './column';

export class Row {
    constructor(columnDefinition: Array<number>) {
        this.backgroundColor = "transparent";
        this.contentBackgroundColor = "transparent";
        this.mobileStack = false;
        this.columns = columnDefinition ? columnDefinition.map(function (value: number, index: number) {
            return new Column(value);
        }) : [];
    }
    backgroundColor: string;
    contentBackgroundColor: string;
    mobileStack: boolean;
    columns: Column[];

    static create(columnDefinition: Array<number>): Row {
        return new Row(columnDefinition);
    }
    static duplicate(row: Row): Row {
        var newRow = new Row(null);
        newRow.backgroundColor = row.backgroundColor;
        newRow.contentBackgroundColor = row.contentBackgroundColor;
        newRow.mobileStack = row.mobileStack;
        newRow.columns = row.columns.map((col) => {
            return Column.duplicate(col);
        });
        return newRow;
    }
}