import { IPredicateOption } from '../predicateOption';

export class StringBeginsWith implements IPredicateOption<string>{
    name: "StringBeginsWith";
    label = "Begins with";
    evaluator(left: string, right:string){ return left.startsWith(right);}
}