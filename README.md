בחרתי לבצע פרוייקט שנקרא "Makeup Community Blog".

פרוייקט זה הוא בעצם אתר מסוג בלוג בו משתמשים הרשומים לאתר יכולים ליצור, לערוך, למחוק ולשמור
פוסטים שונים בנושאי איפור.

הפרוייקט מחולק ל-2 חלקים:

1. Frontend - 
צד הלקוח: על מנת לבנות אותו השתמשתי ב-Angular (HTML, CSS, Javascript) ובספריות
וכלים בהם ניתן להשתמש בפלטפורמה זו (כדוגמת HttpClient, ng-redux, router, ועוד).
יש לבצע npm I בטרמינל בצד שרת וצד לקוח ב-vs code 

2. Backend - 
צד השרת: על מנת לבנות אותו השתמשתי בשרת מקומי של MongoDB אותו התקנתי על המחשב,
וכן בשירות (פרוייקט צד נוסף) אשר מנהל את הקשר בין צד הלקוח לבין השרת. את פרוייקט הצד בניתי באמצעות
NodeJS ובספריות ובכלים נוספים על מנת לבצע את התקשורת (כדוגמת express, mongoDB, ועוד).

*****   !!לכן כדי להריץ את הפרוייקט במלואו יש צורך בהתקנה מקומית של שרת
 MongoDB,
ובאופן חד פעמי ליצור בתוכו בסיס נתונים בשם "makeup-community" ובתוכו ליצור שני אוספים בשמות 
"users" ו-"posts"   *****


# MakeupCommunity

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
