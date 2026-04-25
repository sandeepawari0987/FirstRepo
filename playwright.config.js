// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  //retries: 1,
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  reporter: [['html', { open: 'never' }]],
  
  projects:
  [
      {
      name: 'chromium',
      use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    //only-on-failure, off, on
    //video: 'retain-on-failure',
    //on – Record every test. 
    //retain-on-failure – Keep videos only for failed tests (recommended for CI).
    //on-first-retry – Record only on first retry.
    trace: 'on',
    //...devices['Galaxy S5'],
    
         },
      },

    //   {
    //   name: 'firefox',
    //   use: {
    // browserName: 'firefox',
    // headless: false,
    // screenshot: 'on',
    // //only-on-failure, off, on
    // trace: 'on',
    //      },
    //   }
  ]
  

};

module.exports = config;
