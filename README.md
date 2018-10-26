# Beep Boop

#### For Loop Exercise for Epicodus, 10.26.2018

#### By Kristin Brewer-Lowe

## Description

This basic webpage takes a name and number from a user and returns a range of numbers from 0 to the number the user provided with a few exceptions.

## Specifications

* Program replaces 0 with "Beep!"
  * Example input: 0
  * Example output: ["Beep!"]
* Program replaces 1 with "Boop!"
  * Example input: 1
  * Example output: ["Beep!", "Boop!"]
* Program replaces any number containing 0 with "Beep!"
  * Example input: 20
  * Example output: ["Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"]
* Program replaces any number containing 1 with "Beep!" This condition trumps numbers containing 0.
  * Example input: 11
  * Example output: ["Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Boop!"]
  * Example input: 10
  * Example output: [ . . . "Boop!"]
* Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that." The name "Dave" is replaced with the user's name. This conditions trumps all others.
  * Example input: 3
  * Example output: ["Beep!", "Boop!", "2", "I'm sorry, Dave. I'm afraid I can't do that."]
  * Example input: 30
  * Example output: [ . . . "I'm sorry, Dave. I'm afraid I can't do that"]
* Program assigns a random color to all remaining numbers in list.
  * Example input: 2
  * Example output: ["Beep!", "Boop!", 2] and 2 is assigned a random color.

## Setup/Installation Requirements

* View this project directly at: https://klowe27.github.io/beep-boop/
* To clone this project, in the terminal use command $ git clone https://github.com/klowe27/beep-boop
* Then, open index.html in any browser

## Known Bugs

There are no known bugs at this time.

## Support and contact details

If you run into any issues or have questions, please contact me at kristin.lowe1@gmail.com or feel free to make a contribution to the code.

## Technologies Used

* Javascript
* jQuery
* CSS
* Bootstrap
* HTML

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Kristin Brewer-Lowe**
