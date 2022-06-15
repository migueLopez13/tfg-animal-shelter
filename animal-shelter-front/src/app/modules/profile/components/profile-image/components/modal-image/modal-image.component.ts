import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { FileInputComponent, FileValidator } from 'ngx-material-file-input';
import { UsersService } from 'src/app/shared/services/users.service';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html'
})
export class ModalImageComponent implements OnInit {

  @Input() avatar!: string
  @Input() userEmail!: string
  @Output() close = new EventEmitter()
  avatarForm!: FormGroup
  file!: FormControl
  maxSize = 104857600;
  imageSrc!: string


  constructor(
    private readonly store: Store<AppState>,
    private readonly fb: FormBuilder,
    private readonly userService: UsersService
  ) { }

  ngOnInit(): void {
    this.file = new FormControl('', [Validators.required, FileValidator.maxContentSize(this.maxSize)])
    this.avatarForm = this.fb.group({
      file: this.file
    })
    this.imageSrc = this.avatar
  }

  handleInputChange(e: any) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e: any) {
    const reader = e.target;
    this.imageSrc = reader.result;
  }

  closeModal() {
    this.close.emit()
  }

  saveElement() {
    if (this.avatar !== this.imageSrc) {
      console.log(this.imageSrc)
      this.store.dispatch(
        ProfileActions.updateAvatarRequest(
          { avatar: this.imageSrc }
        )
      )
    }
    this.closeModal()
  }

}

