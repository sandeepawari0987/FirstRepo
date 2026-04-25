# MyPlaywrightAutomation

A Playwright-based automated testing framework for e-commerce application testing using the Page Object Model (POM) design pattern.

## Project Overview

This project contains automated test scripts for testing an e-commerce client application. It includes end-to-end tests for user login, product browsing, adding products to cart, and checkout workflows.

**Application Under Test:** https://rahulshettyacademy.com/client

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Git** (optional, for version control)

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd e:\MyPlayWrightAutomation\FirstRepo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install Playwright and its dependencies as specified in `package.json`.

## Project Structure

```
.
├── page/                          # Page Object Model classes
│   ├── DashboardPage.js          # Dashboard page interactions
│   ├── LoginPage.js              # Login page interactions
│   └── POManager.js              # Page Object Manager
├── tests/                         # Test specifications
│   ├── AllinOne.spec.js          # End-to-end test suite
│   └── ClientApp.spec.js         # Client app test scenarios
├── testData/                      # Test data
│   └── testDatafile.json         # Test credentials and data
├── playwright-report/            # HTML test reports (generated)
├── test-results/                 # Test execution results (generated)
├── playwright.config.js          # Playwright configuration
└── package.json                  # Project dependencies
```

## Configuration

The project is configured via `playwright.config.js`:

- **Test Directory:** `./tests`
- **Test Timeout:** 30 seconds
- **Expect Timeout:** 5 seconds
- **Browser:** Chromium (headless mode)
- **Features:**
  - Screenshots: Enabled on all tests
  - Traces: Enabled on all tests
  - HTML Reporting: Enabled (opens never by default)

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run a specific test file:
```bash
npx playwright test tests/AllinOne.spec.js
```

### Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run tests with debugging:
```bash
npx playwright test --debug
```

## Viewing Test Reports

After test execution, an HTML report is generated in the `playwright-report/` directory.

### View the report:
```bash
npx playwright show-report
```

## Test Data

Test credentials and product information are stored in `testData/testDatafile.json`:

```json
[
    {
        "email": "testuser888@gmail.com",
        "password": "Password@123",
        "productName": "ZARA COAT 3"
    }
]
```

## Page Object Model

The project uses the Page Object Model pattern to separate test logic from page interactions:

### LoginPage
- `goto()` - Navigate to the application
- `login(email, password)` - Perform login

### DashboardPage
- Product browsing and selection
- Add to cart functionality

### POManager
- Centralized management of all page objects

## Test Scenarios

### AllinOne.spec.js
**Client App Login & Purchase Workflow:**
1. Navigate to the client application
2. Login with provided credentials
3. Browse products
4. Add specified product to cart
5. Verify product in cart
6. Proceed to checkout
7. Enter shipping information (country selection)
8. Verify order details
9. Complete order

### ClientApp.spec.js
Additional test scenarios for client application functionality

## Key Features

✅ **Page Object Model Pattern** - Maintainable and scalable test architecture  
✅ **Test Data Management** - External JSON-based test data  
✅ **HTML Reporting** - Detailed test execution reports  
✅ **Screenshots & Traces** - Visual debugging capabilities  
✅ **Network Wait Handling** - Robust element synchronization  

## Troubleshooting

### Tests timeout
- Increase timeout values in `playwright.config.js`
- Check internet connectivity to the test application

### Screenshots/Traces not captured
- Verify `screenshot: 'on'` and `trace: 'on'` are set in config
- Check disk space availability

### Browser not found
- Run `npx playwright install` to download browser binaries

## Dependencies

- `@playwright/test` ^1.59.1 - Playwright testing framework

## License

ISC

## Author

MyPlaywrightAutomation Team

---

For more information on Playwright, visit: https://playwright.dev/
