const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    launchOptions.args.push('--disable-gpu')
    prepareAudit(launchOptions)
    return launchOptions
  })

  on("task", {
    lighthouse: lighthouse(), // calling the function is important
  });
}