let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net' , '.io' , '.org' , '.etc']

for(let i = 0; i < pronoun.length; i++){
    for(let k =0; k < adj.length; k++){
        for(let h =0; h < noun.length; h++){
            for(let j = 0; j < ext.length; j++)
            console.log(pronoun[i] + adj[k] + noun[h] + ext[j])

        }
    }
}