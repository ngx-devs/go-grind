# GoGrind

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Supabase Google login

The Angular app uses Supabase Auth with `signInWithOAuth({ provider: 'google' })`.

In Google Cloud OAuth client:

- Authorized JavaScript origin, local: `http://localhost:4200`
- Authorized JavaScript origin, production: `https://gogrind.com.br`
- Authorized JavaScript origin, production www: `https://www.gogrind.com.br`
- Authorized redirect URI, hosted Supabase: `https://afuuughgjixiynkphgwm.supabase.co/auth/v1/callback`

In Supabase Dashboard > Auth > URL Configuration:

- Site URL, production: `https://gogrind.com.br`
- Redirect URL, local: `http://localhost:4200/auth`
- Redirect URL, production: `https://gogrind.com.br/auth`
- Redirect URL, production www: `https://www.gogrind.com.br/auth`
- Redirect URL, Vercel alias: `https://go-grind-beta.vercel.app/auth`

In Supabase Dashboard > Auth > Providers > Google:

- Enable Google
- Add Google Client ID
- Add Google Client Secret

## Brand palette

Palette sampled from `public/assets/imgs/go-grind-logo.png`:

- Carbon black: `#030303`
- Boot black: `#202020`
- Warm cream: `#ffe0c0`
- Fire red: `#e01000`
- Flame orange: `#ff5000`
- Electric cyan: `#00a0b0`
- Steel gray: `#505050`

## PWA assets

The PWA icon, maskable icon, favicon PNGs, Apple touch icon, and iOS startup splash images are generated from `public/assets/imgs/go-grind-logo.png`.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
