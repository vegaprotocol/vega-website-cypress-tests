describe("DataTicker", () => {
  it("DataIsDisplayedCorrectly", () => {
    //cy.server()
   // cy.route('GET', '1963098858.json').as('getJSON')
   // cy.visit("")
   // cy.wait('@getJSON').wait(300)
   
   //cy.get('*[class^="text-[3.375rem] md:text-[2.75rem] xl:text-[3.375rem]"]').should('be.visible');
   //.invoke('text')
  //.then((stats) => {

    cy.request('https://api.vega.xyz/statistics').then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body.statistics.blockDuration);
      
      //expect(response.responseBody).to.have.property('')
      //cy.wrap(response.responseBody._id).as('newId')
  })
  // then later in your code use:
 // cy.get('@newId').then((newId) => {
    //  cy.get(someInput).type(newId)
  })
    

//cy.log(stats);
})

    //fetch(`https://api.vega.xyz/epochs`),
    //fetch(`https://api.vega.xyz/statistics`)
   // .then((response) => {
   //   return new Promise(resolve => {        
     //     expect(response).property('status').to.equal(200)
       //   expect(response.body).property('id').to.not.be.oneOf([null, ""])
     //     const respBody = response.body;
       //   boardId = respBody['id']
       //   resolve(boardId)
//});
//});



/*

 fetch(`https://api.vega.xyz/epochs`),
      fetch(`https://api.vega.xyz/statistics`),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json()
          })
        )
      })
      .then(function (data) {
        updateStats({
          name: 'validators',
          value: data[0].epoch.validators.length,
        })

        updateStats({
          name: 'blockDuration',
          value: Math.round(data[1].statistics.blockDuration / 1000000) + 'ms',
        })

        updateStats({
          name: 'currentEpoch',
          value: data[0].epoch.seq,
        })

        let stakedTotal = new BigNumber(0)
        data[0].epoch.validators.forEach((validator) => {
          let validatorTotal = new BigNumber(validator.stakedTotal)
          stakedTotal = stakedTotal.plus(validatorTotal)
        })
*/