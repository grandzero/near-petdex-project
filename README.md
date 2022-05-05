# near-petdex-project
Pet treatment and vaccination tracking dapp with near protocol

## Loom Video
https://www.loom.com/share/8cb20c37f20647f2a2a885507b6026ba

In this project there are 5 classes. Projects purpose is tracking pet vaccinations accessible and decentralized.

Clinic class simply stores clinics name and id. This is a basic version of this project so it only contains harmless data. Every clinic should be registered to be able to use dapp. Every clinic has a unique id which is equal to hash of it's name and a random value.

Vet class is for storing veterinarian's information. It takes a name and a surname and generates an id.

Main class is PetDetails, which includes name, owner, age, treatments and vaxes. Everytime pet gets a treatment or regular vaccination, only owner can save treatment or vax record.

Treatment class includes name, description, clinic and vet info. Only owner of pet can add treatment and vax. And user can only add registered clinic and vet.

Vax includes common vax types, name, desc, clinic and vet info.

Details will be added and frontend for this project will be added while review process.

User can save treatment and vaccination details for pet decentralized using near protocol. By using this dapp, users pets data will be accessible all around the world.

Only pet detail creator can add treatment or vaccination info. Other wallets are not allowed to add or modify the pet info.
