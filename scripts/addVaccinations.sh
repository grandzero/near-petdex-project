#!/usr/bin/env bash
NEAR_ENV=mainnet near call $CONTRACT addVax '{"petid":'$PET_ID', "type": 2, "name":"Parasite Vax", "desc":"Internal parasite vax", "clinicId":1432540413, "vetId": 1118092212}' --accountId $BENEFICIARY