import { v4 as uuidv4 } from 'uuid';
uuidv4();
for (let i = 0; i < 1000; i++) {
    console.log(uuidv4());
}

fetch ('ttps://randomuser.me/api/')

.then(respponse => Response.json)

.then((data) => {
    console.log(data.user);
})