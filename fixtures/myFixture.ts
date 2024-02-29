import { test as myTest } from '@playwright/test'

type example1 = {
    hey: string,
}

const fixture = myTest.extend<example1>({
    hey: 'new custom fixture',
})

export const test = fixture;
export const expect = fixture.expect; //can give any name rather than expect