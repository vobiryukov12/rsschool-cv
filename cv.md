# [rsschool-cv](https://vobiryukov12.github.io/rsschool-cv/)
# Vlad Biryukov

## Contacts

* Location: Moscow, Russia <br>
* Phone: +7 (969) 037 35 69 <br>
* E-mail: vobiryukov12@gmail.com

## About Me

I strive to constantly learn and discover new things. My motivation is the desire to master some new skills. At RS School, I want to master frontend development, because I like the visual part of the work, when you can immediately see the result in the browser.

## Skills

* HTML <br>
* CSS / SASS <br>
* BEM (Basics) <br>
* JavaScript (Basics) <br>
* Git / GitHub (Basics) <br>
* VS Code <br>
* Prepros <br>
* Figma <br>

## Code example

Which color is the brightest?
```
function value(str) {
  let r = parseInt(str.slice(1, 3), 16);
  let g = parseInt(str.slice(3, 5), 16);
  let b = parseInt(str.slice(5, 7), 16);
  
  return Math.max(r, g, b);
}

function brightest(colors) { 
  let arr = []; 
  
  for (let i = 0; i < colors.length; i++) {
    arr.push(value(colors[i]));
  }
  
  for (let i = 0; i < colors.length; i++) {
    if (Math.max(...arr) === arr[i]) {
      return res = colors[i];
    }
  }
}
```

## Experience

Educational projects:

* Yandex.Practicum (HTML, CSS, JavaScript)
  + [Procrastinate](https://vobiryukov12.github.io/procrastinate) 
* Head First JavaScript Programming (HTML, CSS, JavaScript)
  + [Battleship](https://vobiryukov12.github.io/battleship) 

## Education
* Peoples' Friendship University of Russia, Moscow
  + Computer Science and Information Tehcnologies

* Yandex.Practicum
  + Сourse "HTML, CSS, JavaScript: introductory module"

* HTML Academy 
  + Сourse "Start in Frontend"
  
* Hexlet
  + Сourse "JavaScript Basics"

## Languages
* Russian <br>
* Uzbek <br>
* English (A1 — Elementary). Currently, I am actively studying the language, taking the course "Teacher's Method" on the Puzzle English online platform, and also listening to the audio course "English by the method of Dr. Pimsler" for the practice of spoken English.
