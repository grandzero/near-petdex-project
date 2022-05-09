#!/usr/bin/env bash
NEAR_ENV=mainnet near call $CONTRACT createClinic '{"name":"Near Pet Clinic"}' --accountId $BENEFICIARY