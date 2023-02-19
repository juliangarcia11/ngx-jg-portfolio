import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  title: string = '';

  @Output()
  openSideNav = new EventEmitter<boolean>();

  toggleSideNav() {
    this.openSideNav.emit(true);
  }
}
