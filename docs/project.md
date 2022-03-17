# Project Overview

### Folder Structure

- `public` - Should only contain static assets which are served to the client
- `src` - The codebase regarding the page is located here and it's the base path for absolute imports
  - `api` - Contains HTTP logic and services for multiple domains
  - `components` - Components with business logic separated by domains. Should reference components in `components-shared` if possible.<br/>
    Each domain can have their own **Utils** and **Shared Components** if they do not apply to any other domain
  - `constants` - Should contain all static data and configurations. Avoid leaving static values on components
  - `hooks` - Should contain all custom hooks to access data
  - `tests` - Should contain all tests setup
  - `types` - Should contain base types
  - `utils` - Contains utils used commonly by components


  [Back Home](./index.md)
