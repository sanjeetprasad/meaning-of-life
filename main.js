/*Use dot notation to access the value of the key "meaning_of_life" in this 
object
Now access it with bracket notation using a variable called 
"meaning": let meaning = "meaning_of_life"
*/

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
let meaning = meaning_of_life
console.log(meaning)

//console.log(`${hitchhikers_guide.ultimate_answer.meaning}`);
