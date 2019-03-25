# ROTMG-ITEM-API
Fetch images of rotmg items/pets from their item id

## Setup
Include this into your script (You would need jQuery)

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>`

`<script src="itemapi.js"></script>`

## How to Use
Add the data attribute `rotmg` and pass the item id. Examples:
* `<span data-rotmg="23520"></span>`
or
* `<i data-rotmg="23520"></i>`

## Extra
* The item id of empty slot is `-1` or if the passed item id doesn't exit, it would be considered -1.
