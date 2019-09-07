import { IPredicateOption } from '../predicateOption';

export class StringEndsWith implements IPredicateOption<string>{
    name: "StringEndsWith"
    label: "Ends with";
    evaluator(left: string, right: string){return right.endsWith(left);}
}