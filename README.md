# Results Listing App

This is a React application that loads a data payload of property results and
saved properties and allows the user to add/remove saved properties.

## Requirements

- NodeJS (Tested with latest version 13.x).
  - Tests in CI run on LTS versions and latest stable.
- Yarn package manager.

## Setup Locally

To install the dependencies

```bash
yarn install
```

To run the development server run the following:

```bash
yarn start
```

To run the production build:

```bash
yarn build:serve
```

## Testing

To run the test suite:

```bash
yarn test
```

To run with coverage:

```bash
yarn test --coverage
```

## Implementation Notes

- Uses `parcel` as the bundler.
- Fetch data from JSON file and save in state.
- Render 2 sets of listings: results and saved.
- Save and Remove functionality for properties.
