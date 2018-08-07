import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accounts;
  currentAccount;

  constructor(
    private userService: UserService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe( acs => {
      if (acs) {
        this.currentAccount = (acs.filter(ac => ac.owner === localStorage.getItem('currentUser')['id']));
        this.accounts = acs.splice(acs.indexOf(this.currentAccount), 1);
      }
    });
  }
}
