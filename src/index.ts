import * as _ from "lodash";

// Install the library lodash with the following command: npm i lodash
// We will get a compilation error saying that 'could not find a declaration
// file for module 'lodash'.

// In this GitHub repository we can find declaration files
// for all the popular JavaScript libraries: https://github.com/DefinitelyTyped/DefinitelyTyped
// So, to get rid of the error, install this as a development dependency: npm i -D @types/lodash

// Now you can have type declaration from lodash.
_.clone([1, 2, 3]);
