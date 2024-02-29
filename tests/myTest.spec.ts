import { test,expect } from "../fixtures/myFixture";

test('example test1', async({ hey }, info)=>{  //test take args & testInfo
    // info.fail(); //make this test fail
    // info.skip(); //skips this test
    console.log('info.titlePath- ', info.titlePath)
    console.log(hey);
    let text = hey;
    expect(text).toBe('new custom fixture');
    console.log('Our test has ' + info.status);

})

