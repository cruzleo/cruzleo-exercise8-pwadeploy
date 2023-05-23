import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss'],
})
export class CommandBarComponent {
  @Output() addEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteAllEmiiter: EventEmitter<any> = new EventEmitter<any>();

  add = () => {
    return this.addEmitter.emit();
  };

  deleteAll = () => {
    return this.deleteAllEmiiter.emit();
  };
}
