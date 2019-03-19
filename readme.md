# CHIDORI

It's a Styleguide used by MedPass products, feel free to use it.

if you are looking for documentation, visit [website](https://medpassbrasil.github.io/chidori/)

## CODING
```bash
npm i && cd website && npm i
npm start
```

## HOW USE IT
```bash
npm i --save @medpass/chidori
```

>react.js
```javascript
import React from "react"
import "@medpass/chidori/build/css/chidori.min.css"

const MedpassButton = () => (
	<button className="btn primary font-circularBold-15px" >Styled Button</button>
)

export default MedpassButton
```
