# CHIDORI

[![npm](https://img.shields.io/npm/v/@medpass/chidori)](https://www.npmjs.com/package/@medpass/chidori)
![license](https://img.shields.io/npm/l/@medpass/chidori)
[![gh-pages](https://img.shields.io/badge/gh_pages-docs-blue?logo=github&style=flat)](https://medpassbrasil.github.io/chidori/)

<img src="./assets/img/chidori.jpg" alt="chidori" width=250 />

Medpass's Styleguide, feel free to use it.

if you are looking for complete documentation, visit our [website](https://medpassbrasil.github.io/chidori/)

## How use it

```bash
npm i --save @medpass/chidori
```

> react.js

```javascript
import React from "react"
import "@medpass/chidori/build/css/chidori.min.css"

const MedpassButton = () => <button className="btn primary font-circularBold-15px">Styled Button</button>

export default MedpassButton
```

## Contributing

```bash
λ cd website && npm i && cd .. && npm i
λ npm start
```

Then you can edit `src/scss/*` files, everything that you change, will reflect to docs page at `localhost`

## License

The MIT License (MIT)

Copyright (c) 2019 Medpass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
