import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'app/auth/auth.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isAuthenticated = false;
  private userSubscription: Subscription;
  constructor(
    private dataStorage: DataStorageService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').subscribe((userState) => {
      this.isAuthenticated = userState.user ? true : false;
    });
  }

  onSaveData() {
    this.dataStorage.saveRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
