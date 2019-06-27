import {Component,Input,Output,EventEmitter} from "@angular/core"


@Component({
    selector:"grid-ui",
    templateUrl : "./CustomerApp.Grid.html"
})
export class GridComponent{
    gridColumns: Array<Object> = new Array<Object>();
    gridData : Array<Object> = new Array<Object>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns: Array<Object>){
       this.gridColumns = _gridColumns;
    }
    @Input("grid-data")
    set setGridData(_gridData: Array<Object>){
        this.gridData = _gridData;
    }
    @Output("grid-selected")
    eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
    SelectGrid(_selected:Object){
        //send the selected object to the UI under which this component is running
       //emit out an event that will send a signal to the UI
       this.eventemitter.emit(_selected);
    }
}