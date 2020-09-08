import { Injectable } from '@angular/core';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) { // MemberEditComponent is passed so that we can get access to form
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved cahnges will be lost');
        }
        return true;
    }
}