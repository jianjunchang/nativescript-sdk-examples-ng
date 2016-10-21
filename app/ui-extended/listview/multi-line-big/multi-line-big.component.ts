import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, Country }  from "../mock-dataItems";

// >> multi-line-big-code
@Component({
    selector: "multi-line-big-listview",
    templateUrl: "ui-extended/listview/multi-line-big/multi-line-big.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineBigListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    ngOnInit() {
        for (var i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
        }
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }  

    onSetupItemView(args: SetupItemViewArgs) {
        // further customisation can be achived with SetupItemViewArgs
        // example for creating a variable for each third element
        args.view.context.third = (args.index % 3 === 0);
    }  
}
// << multi-line-big-code