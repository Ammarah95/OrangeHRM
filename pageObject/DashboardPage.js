export class DashboardPage {
  
  constructor(page) {
    this.page = page;
  }

  getMenuItem(name) {
  return this.page.locator(`a.oxd-main-menu-item span`, { hasText: name });
}

}
