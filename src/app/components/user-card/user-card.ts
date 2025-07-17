import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  output,
  Output,
} from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-card',
  outputs: ['userContacted'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user: User | undefined = undefined;
  @Input() selected: boolean = false;
  @Output() userContacted = new EventEmitter<boolean>(false);
  @Output() userSelected = new EventEmitter<number>();

  handleContact(): void {
    this.userContacted.emit(true);
  }

  handleUserDetails(): void {
    if (this.user) {
      this.userSelected.emit(this.user.id);
      console.log('user selezionato');
    }
  }
}
