describe('testApp scenarios', async () => {
    it('should compute sum', async () => {
        await $('~IntegerA').addValue('10');
        await $('~IntegerB').addValue('20');
        await $('~ComputeSumButton').click();

        expect(await $('~Answer')).toHaveText('30');
        await driver.pause(5000);

    });
})