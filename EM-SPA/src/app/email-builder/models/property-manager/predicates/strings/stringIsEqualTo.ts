import { IPredicateOption } from '../predicateOption';

export class StringIsEqualTo implements IPredicateOption<string>{
    name="StringIsEqualTo"
    label = "Is equal to";
    evaluator(left: string, right: string){ return left == right; }
}