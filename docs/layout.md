---
id: layout
title: Grid
---

<div class="wrapCover">
    <figure class="coverBackground showAfter">
        <div class="background gridsCover"></div>
    </figure>
    <figure class="coverImage showCover">
        <img src="../../img/grids-cover.png">
    </figure>
</div>

## Flexbox Example

<div class="w-100p
            h-50vh
            background-sharpBlues
            flex-row-between-center-center
            flex-wrap
            p-20px
            m-bottom-40px
            overflow-hidden"
        >
    <div class="w-30p
                h-100p
                background-darkBlue"
            >
            <div class="w-100p
                       h-100p
                       m-top-20px
                       flex-column-start-center-center"
                    >
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
            </div>
    </div>
    <div class="w-70p
                h-100p
                background-greyBlue
                flex-column-start-center-center"
            >
            <div class="w-90p
                        h-20p
                        background-darkBlue
                        m-top-30px
                        flex-column-center-center-center"
                    >
            </div>
            <div class="w-90p
                        h-40p
                        background-nightPurple
                        m-top-30px"
                    >
            </div>
            <div class="w-90p
                        h-40p
                        background-royalPink
                        m-top-30px"
                    >
            </div>
    </div>
</div>

Code:
```html
Units:

- px
- vw
- vh
- p (%)

Classes:

- w (width)
- h (height)
- p (padding)
- m (margin)

We use to align with Flexbox:
    | If you don't know how to use flexbox:                   |
    | https://css-tricks.com/snippets/css/a-guide-to-flexbox/ |

- display
- flex-flow
- justify-content
- align-items
- align-content

<div class="flex-column-center-center-center"></div>
- [display:flex]-[flex-flow:column]-[justify-content:center]-[align-items:center]-[align-content:center]



Now see the example above, without using CSS/SASS!

<div class="w-100p
            h-50vh
            background-sharpBlues
            flex-row-between-center-center
            flex-wrap
            p-20px
            overflow-hidden"
        >
    <div class="w-30p
                h-100p
                background-darkBlue"
            >
            <div class="w-100p
                       h-100p
                       m-top-20px
                       flex-column-start-center-center"
                    >
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
                <div class="w-80p
                            h-10p
                            background-spaceBlue
                            m-top-10px"
                        >
                </div>
            </div>
    </div>
    <div class="w-70p
                h-100p
                background-greyBlue
                flex-column-start-center-center"
            >
            <div class="w-90p
                        h-20p
                        background-darkBlue
                        m-top-30px
                        flex-column-center-center-center"
                    >
            </div>
            <div class="w-90p
                        h-40p
                        background-nightPurple
                        m-top-30px"
                    >
            </div>
            <div class="w-90p
                        h-40p
                        background-royalPink
                        m-top-30px"
                    >
            </div>
    </div>
</div>
```