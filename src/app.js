let hobbie = [
    {id: 0, name: "vélo"},
    {id: 1, name: "moto"},
    {id: 2, name: "couture"},
    {id: 3, name: "écrire des histoires"},
    {id: 5, name: "programmer"},
    {id: 6, name: "faire du cheval"},
    {id: 7, name: "dessiner"},
    {id: 8, name: "chanter"},
    {id: 4, name: "sortir dans la nature"},
    {id: 9, name: "faire du sport"},
    {id: 10, name: "écouter de la musique"},
    {id: 11, name: "lire des lives"},
    {id: 12, name: "aller voir des expo"},
    {id: 13, name: "sortir son chien"},
    {id: 14, name: "jouer aux échecs"},
    {id: 15, name: "barbecue"},
    {id: 16, name: "cuisiner"},
    {id: 17, name: "astronomie"},
    {id: 18, name: "faire du foot"},
    {id: 19, name: "danser"},
    
];



import { v4 as uuidv4 } from 'uuid';
uuidv4();

for (let i = 0; i < 1000; i++) {
    console.log(uuidv4());
}

fetch ('https://randomuser.me/api/')

.then(respponse => Response.json)

.then((data) => {
    console.log(data.user);
})