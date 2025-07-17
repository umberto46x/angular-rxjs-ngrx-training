import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'user-card',
  outputs: ['userContacted'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user: User | undefined = undefined;
  @Output() userContacted = new EventEmitter<boolean>(false);

  handleContact(): void {
    this.userContacted.emit(true);
  }
}
