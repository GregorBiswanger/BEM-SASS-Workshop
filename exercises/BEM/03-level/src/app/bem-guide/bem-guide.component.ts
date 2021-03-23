import { Component } from '@angular/core';

@Component({
  selector: 'app-bem-guide',
  templateUrl: './bem-guide.component.html',
  styleUrls: ['./bem-guide.component.scss']
})
export class BemGuideComponent {
  currentTab: tabCategory = 'Block';

  openTabContent(tabCategory: tabCategory) {
    this.currentTab = tabCategory;
  }
}

type tabCategory = 'Block' | 'Element' | 'Modifier';