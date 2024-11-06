describe('ios sample test', async () => {
    it('sample test', async () => {
        await driver.pause();
    })

    it('test alert view', async () => {
        const alertViews = await $('~Alert Views');
        await alertViews.click();

        const simpleAlert =  await $('~Simple');
        simpleAlert.click();

        // await driver.pause(5000);

        expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })
})