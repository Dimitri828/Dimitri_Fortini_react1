import student from "./main.js";
import contacts,{show_contacts} from "./script1.js";
console.log(student);
let new_student=contacts(student,["monica","fabrisio"])
console.log(contacts(student,["monica","fabrisio"]));
console.log(show_contacts(new_student));
