import { VariableTypes } from './variable-types';

export class MergeField {

    constructor()
    constructor(obj: MergeField)
    constructor(obj?: any) {
        this.name = obj && obj.name;
        this.type = obj && obj.type;
    }
    name: string;
    type: VariableTypes;

    static duplicate(obj: MergeField): MergeField {
        return new MergeField(obj);
    }
}