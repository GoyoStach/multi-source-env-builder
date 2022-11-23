# Multi-Source Env Builder

> Have a single build with possibility of switching between environment variables without actually rebuilding the entire app

## **Build**

Environnement Variable structure is stored inside the [`.env.example`](./.env.example). It can be pushed to the repo without trouble as only the structure is available without the actual values.

1.  Define a `.env.example` file, with variables you want set on our environment
2.  Create your project structure under the config folder
3.  Add the folder path to the [`.gitignore`](./.gitignore). ⚠️**IT WILL CONTAIN ALL SENSITIVE DATA SO DO NOT SKIP THIS STEP** ⚠️
4.  Build the application `npm run build`
5.  Preview the build on different environments with `npm run start:dev:cartier`, `npm run start:prod:iwc`, etc.
6.  Preview other custom env without using pre-existing scripts : `npm exec -- env-cmd -f [path] npm run preview`
    1.  You can add as many .env as you wish for, just add `env-cmd -f [path]`before the `npm run preview` command above
    2.  Example : `npm exec -- env-cmd -f ./config/env/.env.prod env-cmd -f ./config/maison/.env.maison.iwc npm run preview`

## **Local**

If you want to run directly from cli without building the application use : `npm exec -- env-cmd -f ./config/env/.env.dev env-cmd -f ./config/maison/.env.maison.iwc vite`

### **Under the hood**

1. Using `@import-meta-env/unplugin` that on build time (`npm run build`) will substitute all `import.meta.env` from our source code to a predefined placeholder
1. Then running `import-meta-env --example .env.example -o "build/**/*"` will substitute the predefined placeholder from `build` with the actual environment variables
