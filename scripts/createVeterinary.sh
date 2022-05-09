#!/usr/bin/env bash
NEAR_ENV=mainnet near call $CONTRACT createVet '{"name":"Test ", "surname":"User"}' --accountId $BENEFICIARY