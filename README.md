# Shopping Cart DOM Checkpoint

The provided GoMyCode HTML, stylesheet, and product images are the starting point for this project.

## Open the project

Download and extract the repository, then open `index.html` in a browser. Alternatively, open it with VS Code Live Server. Bootstrap loads from its original CDN link; the cart JavaScript and button symbols are local.

## Features

- Plus and minus buttons update each product independently.
- Quantities start at zero, as in the supplied HTML, and cannot become negative.
- Delete removes the product and its layout wrapper.
- The heart toggles between black and red, with an accessible pressed state.
- The total recalculates on quantity changes and deletions.
- Deleting all products displays an empty-cart message and a zero total.
- Real buttons support mouse, touch, and keyboard interaction.

## Starter source

https://drive.google.com/drive/folders/1EqrjMrZx5FGyBdIHrT37uelvwb30TDBx

The starter's cards, prices, product images, and styling are retained. Resource paths were made relative so the page also works when opened locally. Icon elements were replaced with labelled buttons, and small responsive and interaction styles were appended to the supplied CSS.

## Example check

Two Baskets at $100, three Socks at $20, and one Bag at $50 total $310. Deleting Socks changes the total to $250. Hearts do not change prices. Reducing a quantity at zero keeps it at zero.

## Automated DOM checks

With a current Node.js version, run `npm install` then `npm test`. The tests click the actual DOM controls and verify quantities, the zero boundary, heart toggling, deletion totals, and the empty cart.
