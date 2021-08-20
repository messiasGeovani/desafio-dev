# ByCoders Challende: Frontend
> A CNAB files upload platform maded with NextJS and Typescript.

<img src="./assets/screenshot.gif">

## Development Manual

This project was made with the React framework <b>[NextJS](https://nextjs.org/)</b> together with the following technologies:

- <b>[Yarn](https://yarnpkg.com/)</b>: Yarn is a faster and more secure package manager than the standard NodeJS package manager.

- <b>[Typescript](https://www.typescriptlang.org/)</b>: The javascript superset that allows us to use the latest Ecmascript features, in addition to being compiled and having strong typing, giving us more stability and clarity.

- <b>[Styled-components](https://styled-components.com/)</b>: A css-in-js library that allows us to style components in a simple way, in addition to being able to pass properties into the style, making it reactive.

- <b>[Redux](https://redux.js.org/)</b>: This library allows us to manage global states within the application.


---

* ### Instalation

Before starting the installation, create an .env file at the root of the project with the following according to the variables in the .env.local.sample file.

After, run the following command:

```sh
yarn build && yarn start
```

To start the project on development mode, run:

```sh
yarn dev
```

---

* ### Project Structure

```
├── next.config.js
├── next-env.d.ts
├── package.json
├── README.md
├── src
│   ├── assets
│   │   ├── banner.png
│   │   ├── banner-signup.png
│   │   ├── profile-img.jpeg
│   │   └── profile-img.png
│   ├── components
│   │   ├── AuthValidator
│   │   │   └── index.tsx
│   │   ├── Content
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Loading
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── SideBar
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── SignForm
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── TopBar
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── TransactionList
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── UploadFileForm
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── context
│   │   └── Content.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── home
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   ├── login
│   │   │   └── index.tsx
│   │   └── signup
│   │       └── index.tsx
│   ├── public
│   │   ├── favicon.ico
│   │   └── vercel.svg
│   ├── services
│   │   └── api.ts
│   ├── store
│   │   ├── hooks.ts
│   │   ├── index.ts
│   │   └── reducers
│   │       └── userReducer.ts
│   ├── styles
│   │   ├── animations.ts
│   │   ├── GlobalStyles.ts
│   │   ├── pages
│   │   │   ├── homeStyles.ts
│   │   │   ├── loginStyles.ts
│   │   │   └── signupStyles.ts
│   │   └── theme.ts
│   └── utils
│       ├── formatToCPF.ts
│       └── formatValue.ts
├── styled.d.ts
├── tsconfig.json
└── yarn.lock
```

## Banners credits

Author - [Abstract Vector](https://www.freepik.com/vectors/abstract)

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) 

Email – messias.geovani.lima@gmail.com

Github profile – [messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://github.com/messiasGeovani/bycoders-challenge/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
