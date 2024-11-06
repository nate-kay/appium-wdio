describe('Sample', () => {

    it('android element test', async () => {
        const appOption = await $('~App');
        await appOption.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();

        await driver.back();

    })

    it('test auto complete text field', async () => {
        // click on views
        const views = await $('~Views');
        await views.click();

        // click on auto completed
        const autoComplete = await $('~Auto Complete');
        await autoComplete.click();

        // click on screen top
        const screenTop = await $('~1. Screen Top')
        await screenTop.click();

        // enter text into country
        const countryName = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await countryName.addValue('India');

        // verify the text added
        await expect(countryName).toHaveText('India');

    })
})

