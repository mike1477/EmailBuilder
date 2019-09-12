import { Component, OnInit, Input } from '@angular/core';
import { MergeFieldsService } from 'src/app/shared/services/merge-fields.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MergeField } from 'src/app/shared/models/merge-field';
import { VariableTypes } from 'src/app/shared/models/variable-types';

@Component({
  selector: 'app-merge-field-manager',
  templateUrl: './merge-field-manager.component.html',
  styleUrls: ['./merge-field-manager.component.scss']
})
export class MergeFieldManagerComponent implements OnInit {

  @Input() modal:any;
  
  public busy: boolean = false;
  private _selectedMergeField:MergeField;
  private _variableTypeOptions: Array<string>;
  private _editedMergeField: MergeField = new MergeField();
  
  constructor(
    public activeModal: NgbActiveModal, 
    private mergeFieldService: MergeFieldsService) {
    }

    ngOnInit() {
      this._variableTypeOptions  = Object.keys(VariableTypes).map((value)=>{ 
        return value;
      });
  
       this.mergeFieldService.getMerdeFields().subscribe(
        (mergeFields)=>{ }, 
        (err)=>{},  //TODO handle err
        ()=>{});    //Complete
     }

    get selectedMergeField(): MergeField{
      return this._selectedMergeField;
    }

    set selectedMergeField(newValue: MergeField){
      this._editedMergeField = JSON.parse(JSON.stringify(newValue));
      this._selectedMergeField = newValue;
    }

    get mergeFields(){
      return this.mergeFieldService.mergeFields;
    }

    get variableTypeOptions():Array<string>{
      return this._variableTypeOptions;
    }

    get variableNameEditField():string{
      return this._editedMergeField.name;
    }

    set variableNameEditField(newValue:string){
      if(newValue) this._editedMergeField.type = this._editedMergeField.type || VariableTypes.string;
      this._editedMergeField.name = newValue;
    }

    get selectedMergeFieldType() :VariableTypes{
      return this._editedMergeField.type;
    }

    set selectedMergeFieldType(newValue: VariableTypes){
      this._editedMergeField.type = newValue;
    }

    private onChangeError(err){
    }

    private onChangeComplete(){

    }

    submitChanges(){
      let self = this;
      self.busy = true;
      if(self._selectedMergeField){
        let subscription = self.mergeFieldService.updateMergeField(self._selectedMergeField, self.variableNameEditField, self.selectedMergeFieldType)
        .subscribe(null, 
          (err)=>{
          self.busy = false;
          console.log("handle error");
        },
        ()=>{
          self._selectedMergeField = null;
          self._editedMergeField = new MergeField();
          self.busy = false;
          //subscription.unsubscribe();        
        });
      }
      else{
        let subscription = this.mergeFieldService.addMergeField(this._editedMergeField)
        .subscribe(null, 
        (err)=>{
          self.busy = false;
          console.log("handle error");
        },
        ()=>{
          self._selectedMergeField = null;
          self._editedMergeField = new MergeField();
          self.busy = false;
          //subscription.unsubscribe();        
        });
      }
    }

    deleteMergeField(mergeField: MergeField){
      let self = this;
      let subscription = this.mergeFieldService.deleteMergeField(mergeField)
      .subscribe(null, 
      (err)=>{
        self.busy = false;
        console.log("handle error");
      },
      ()=>{
        self._selectedMergeField = null;
        self._editedMergeField = new MergeField();
        self.busy = false;
        //subscription.unsubscribe();        
      });    
    }
}
