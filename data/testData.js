export const testData = {
  url: 'https://opensource-demo.orangehrmlive.com/',
  username: 'Admin',
  password: 'admin123',
  tabTests: [
    {
      name: 'Admin',
      expectedUrl: '/web/index.php/admin/viewSystemUsers'
    },
    {
      name: 'PIM',
      expectedUrl: '/web/index.php/pim/viewEmployeeList'
    },
    {
      name: 'Leave',
      expectedUrl: '/web/index.php/leave/viewLeaveList'
    }
  ]
};