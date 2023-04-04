const { User } = require('../models');

const userData = [
    {
        username: "Elon Musk made it",
        twitter: "Elon Musk",
        github: "Urlismagic404",
        email: "amandaisnew@hotlink.com",
        password: "newidungusable"
    },
    {
        username: "usernamesarefamous",
        twitter: "newsourcepath",
        github: "skinsdownloaded",
        email: "keyarar@gmail.com",
        password: "12345pass"
    },
    {
        username: "swimnumber1",
        twitter: "swiming4thephoto",
        github: "mieklswims",
        email: "mikelphilpswascaught@hotmail.com",
        password: "cant guess me"
    },
    {
        username: "les sheroud",
        twitter: "hardcore pawn",
        github: "american pawn",
        email: "lesshroud@americanpawn.com",
        password: "newpower"
    },
    {
        username: "jamescantbejames",
        twitter: "jameshasfire",
        github: "jamesiscoolero",
        email: "jamesiscool@gmail.com",
        password: "123455667"
    },
    {
        username: "Amandasnewaccount",
        twitter: "AmandasWINGS",
        github: "AMANDAdoescollege",
        email: "amandaisgreat@hotmail.com",
        password: "passwordsarecoolbears"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;