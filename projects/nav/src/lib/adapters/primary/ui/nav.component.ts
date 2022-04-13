import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({ selector: 'lib-nav', templateUrl: './nav.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
    
export class NavComponent implements OnInit{ 

    todayString : string = new Date().toDateString();


    ngOnInit(): void {
      
    }
}
