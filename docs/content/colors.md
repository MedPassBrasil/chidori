---
id: colors
title: Colors
---

<div class="wrapCover">
    <figure class="coverBackground showAfter">
        <div class="background typographyCover"></div>
    </figure>
    <figure class="coverImage showCover">
        <img src="../../img/color-cover.png">
    </figure>
</div>

## Solid Colors

<div class="colors flex-row-between-center-center flex-wrap">
    <div class="colorContainer background-white">
        <p class="colorName">White</p>
    </div>
    <div class="colorContainer background-lightGrey">
        <p class="colorName">Light Grey</p>
    </div>
    <div class="colorContainer background-darkGrey">
        <p class="colorName">Dark Grey</p>
    </div>
    <div class="colorContainer background-black">
        <p class="colorName">Black</p>
    </div>
    <div class="colorContainer background-lightGreen">
        <p class="colorName">Light Green</p>
    </div>
    <div class="colorContainer background-green">
        <p class="colorName">Green</p>
    </div>
    <div class="colorContainer background-yellow">
        <p class="colorName">Yellow</p>
    </div>
    <div class="colorContainer background-red">
        <p class="colorName">Red</p>
    </div>
    <div class="colorContainer background-lightBlue">
        <p class="colorName">Light Blue</p>
    </div>
    <div class="colorContainer background-royalBlue">
        <p class="colorName">Royal Blue</p>
    </div>
    <div class="colorContainer background-greyBlue">
        <p class="colorName">Grey Blue</p>
    </div>
    <div class="colorContainer background-spaceBlue">
        <p class="colorName">Space Blue</p>
    </div>
    <div class="colorContainer background-darkBlue">
        <p class="colorName">Dark Blue</p>
    </div>
    <div class="colorContainer background-violet">
        <p class="colorName">Violet</p>
    </div>
    <div class="colorContainer background-purple">
        <p class="colorName">Purple</p>
    </div>
    <div class="colorContainer background-darkPurple">
        <p class="colorName">Dark Purple</p>
    </div>
    <div class="colorContainer background-orange">
        <p class="colorName">Orange</p>
    </div>
    <div class="colorContainer background-lightPink">
        <p class="colorName">Light Pink</p>
    </div>
</div>

```sass
// Colors

$white: #ffffff;
$lightGrey: #f5f5f5;
$grey: #e2e2e2;
$darkGrey: #4d5154;
$black: #252525;
$lightGreen: #50e3c2;
$green: #32ca4f;
$yellow: #f7a01c;
$red: #e63349;
$lightBlue: #3dc1cd;
$royalBlue: #008bff;
$greyBlue: #283455;
$spaceBlue: #212b47;
$darkBlue: #161d31;
$violet: #ac32e4;
$purple: #7918f2;
$darkPurple: #4801ff;
$orange: #f77062;
$lightPink: #fe5196;

//Examples
@extend .background-purple ;
@extend .color-purple ;
```

## Gradient Colors

<div class="colors flex-row-between-center-center flex-wrap">
    <div class="colorContainer background-sharpBlues">
        <p class="colorName">Sharp Blues</p>
    </div>
    <div class="colorContainer background-azureGreen">
        <p class="colorName">Azure Green</p>
    </div>
    <div class="colorContainer background-spaceBlues">
        <p class="colorName">Space Blues</p>
    </div>
    <div class="colorContainer background-nightPurple">
        <p class="colorName">Night Purple</p>
    </div>
    <div class="colorContainer background-wineMagenta">
        <p class="colorName">Wine Magenta</p>
    </div>
    <div class="colorContainer background-sunsetOrange">
        <p class="colorName">Sunset Orange</p>
    </div>
    <div class="colorContainer background-royalPink">
        <p class="colorName">Royal Pink</p>
    </div>
</div>

```sass
// Gradient Colors

@extend .background-sharpBlues ;
// background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);

@extend .background-azureGreen ;
// background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);

@extend .background-spaceBlues ;
// background-image: radial-gradient(circle at 0 0, #222c49, #161d31);

@extend .background-nightPurple ;
// background-image: linear-gradient(-255deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);

@extend .background-wineMagenta ;
// background-image: linear-gradient(-255deg, #FF057C 0%, #8D0B93 50%, #321575 100%);

@extend .background-sunsetOrange ;
// background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

@extend .background-royalPink ;
// background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
```