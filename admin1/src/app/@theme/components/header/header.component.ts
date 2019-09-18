import { Component, Input, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {ApicallProvider} from '../../../providers/apicall/apicall'

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' ,link: '/auth/logout'}];

  constructor(private authService: NbAuthService,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private apicall:ApicallProvider) {
     this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.getValue()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
        }

      });
  }

  ngOnInit() {
  
       this.apicall.getUser()
      .subscribe(res => {this.user = res.firstname+" "+res.lastname;
        console.log(this.user);
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
