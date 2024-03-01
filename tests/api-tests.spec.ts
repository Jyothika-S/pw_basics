import { expect, test } from '@playwright/test';

//GET API Request
test('API Get request', async({request}) =>{
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);

    const resdata = await response.text();
    console.log("resdata",resdata);
    expect(resdata).toContain('Janet');

    console.log("response data - ", await response.json());

})

//POST API Request
test('API POST request', async({request}) =>{
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            "name": "jyothi",
            "email": "jyothi@gmail.com"
        }
    })
    expect(response.status()).toBe(201);

    const resdata = await response.text();
    expect(resdata).toContain('jyothi');

    console.log("response data - ", await response.json());
})

//PUT API Request
test('API PUT request', async({request}) =>{
    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
            "name": "jyothi",
            "email": "jyothi@gmail.com"
        }
    })
    expect(response.status()).toBe(200);

    const resdata = await response.text();
    expect(resdata).toContain('jyothi');

    console.log("response data - ", await response.json());
})

//DELETE API Request
test('API Delete request', async({request}) =>{
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204);

})


