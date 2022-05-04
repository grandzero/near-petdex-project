# near-petdex-project

Pet treatment and vaccination tracking dapp with near protocol

In this project there are 5 classes. Projects purpose is tracking pet vaccinations accessible and decentralized.

Clinic class simply stores clinics name and id. This is a basic version of this project so it only contains harmless data. Every clinic should be registered to be able to use dapp. Every clinic has a unique id which is equal to hash of it's name and a random value.

Vet class is for storing veterinarian's information. It takes a name and a surname and generates an id.

Main class is PetDetails, which includes name, owner, age, treatments and vaxes. Everytime pet gets a treatment or regular vaccination, only owner can save treatment or vax record.

Treatment class includes name, description, clinic and vet info. Only owner of pet can add treatment and vax. And user can only add registered clinic and vet.

Vax includes common vax types, name, desc, clinic and vet info.

Details will be added and frontend for this project will be added while review process.

User can save treatment and vaccination details for pet decentralized using near protocol. By using this dapp, users pets data will be accessible all around the world.

Only pet detail creator can add treatment or vaccination info. Other wallets are not allowed to add or modify the pet info.

## Functions

nearpetdex.grandzero.near

## Create Clinic

- This function registers a clinic to smart contract and creates an (almost) unique id for every clinic
- Arguments:
- name: <string> value for clinic name

```jsx
NEAR_ENV=mainnet near call nearpetdex.grandzero.near createClinic '{"name":"Near Pet Clinic"}' --accountId grandzero.near
```

## Get Clinic

- Get Clinic Info by Id
- clinicId: u32 integer value, clinic unique id

```jsx
NEAR_ENV=mainnet near view nearpetdex.grandzero.near getClinic '{"clinicID":CLINIC_ID}'
```

## Create Veterinary

- Register veterinary info to smart contract
- Arguments:
- name: <string> name of vet
- surname: <string> surname of vet

```jsx
NEAR_ENV=mainnet near call nearpetdex.grandzero.near createVet '{"name":"Bayram", "surname":"Utku"}' --accountId grandzero.near
```

## Get Veterinary Info

- Returns veterinary info
- Arguments:
- vetId: <u32> veterinary unique id

```jsx
NEAR_ENV=mainnet near view nearpetdex.grandzero.near getVet '{"vetId":VET_ID}'
```

## Create Pet Details

- Register pet with some details
- Arguments:
- name: <string> name of pet
- age: <u32> age of pet
- isSterilized: <boolean> project mostly focuses on cats and dogs, this argument is used for indicating if cat/dog sterilized or not

```jsx
NEAR_ENV=mainnet near call nearpetdex.grandzero.near createPet '{"name":"Fody", "age":1, "isSterilized":true}' --accountId grandzero.near
```

## Get Pet Details

- Get Pet Details By Id
- Arguments:
- id: <u32> unique id of pet

```jsx
NEAR_ENV=mainnet near view nearpetdex.grandzero.near getById '{"id": PET_ID}'
```

## Add Treatment

- Add Treatment to owned pet
- Arguments:
- id: <u32> Pet’s id one owner can multiple pets so this should be pet’s id
- name: <string> Treatment’s name
- desc: <string> Detailed description and result of treatment
- clinicId: <u32> unique id of clinicId which applies treatment
- vetId: <u32> unique id of veterinary which applies treatment

```jsx
NEAR_ENV=mainnet near call nearpetdex.grandzero.near addTreatment '{"id":PET_ID, "name":"Regular Check", "desc":"Fody is healthy", "clinicId":CLINIC_ID, "vetId": VET_ID}' --accountId grandzero.near
```

## Add Vaccination

- Adds vaccination info to selected pet
- Arguments:
- petid: <u32> Pet’s unique id
- type: <VaxType> There are common vax types for pets. These are simple placeholders. Enum defined in Vax class
- name: <string> Vaccinations name
- desc: <string> Details and result of vaccinations
- clinicId: <u32> Clinic unique id
- vetId: <u32> Vet unique id
