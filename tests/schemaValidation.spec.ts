import { test } from '@playwright/test';
import { Validator, ValidationError } from 'jsonschema';
import examplejson from '../test-data/examplejson.json';
import jsonSchema from '../test-data/jsonSchema.json';

test('JSON Schema Validation', async ({}) => {
    // const examplejson = await import("../test-data/examplejson.json");
    // const jsonSchema = await import("../test-data/jsonSchema.json");

    const v = new Validator();

    // validate JSON against the schema
    const responseJSON = examplejson;
    const validationResult = v.validate(responseJSON, jsonSchema); // Access the default export of the imported JSON schema module

    // check for validation errors
    if (validationResult.errors.length > 0) {
        // if there are errors
        validationResult.errors.forEach((error: any) => {
            if (error instanceof ValidationError) {
                console.error(`Validation error: ${(error as ValidationError).property} ${(error as ValidationError).message}`);
            } else {
                console.error('Non-validation error:', error);
            }
        });
    } else {
        console.log('Validation successful');
    }
});
