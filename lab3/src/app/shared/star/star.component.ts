import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() val: number=0;
  @Input() readonly =false;
  @Output() newItemEvent = new EventEmitter<string>();

  rate()
  {
    this.newItemEvent.emit( String(this.val));

  }

}
