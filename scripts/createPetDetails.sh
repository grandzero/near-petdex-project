#!/usr/bin/env bash
NEAR_ENV=mainnet near call $CONTRACT createPet '{"name":"Fody", "age":1, "isSterilized":true}' --accountId $BENEFICIARY