describe('Page link tests', () => {
  before(() => {
    cy.visit('/')
  })

  // Might be worth separating this function out into a helper file. Leaving it
  // here for the moment so the tests don't appear too abstract at first
  // glance
  const testPageLink = (linkText, path, location, _blank) => {
    it(`The ${location} has a link to ${linkText}`, () => {
      const selector = { nav: 'div#mobileMenu', footer: 'footer'}
      cy.get(selector[location]).within(() => {
        cy.get('a').contains(linkText).then(($a) => {
          cy.wrap($a).should('have.attr', 'href', path)
          if(_blank) cy.wrap($a).should('have.attr', 'target', '_blank')
        });
      });
    });
  };

  // Top nav links
  testPageLink('Key concepts', '/key-concepts/', 'nav');
  testPageLink('Papers', '/papers/', 'nav');
  testPageLink('Blog', 'https://blog.vega.xyz/', 'nav', true);
  testPageLink('Talks', '/talks/', 'nav');
  testPageLink('Develop', '/develop/', 'nav');
  testPageLink('Use the network', '/use/', 'nav');
  testPageLink('Join the community', '/community/', 'nav');

  // Footer links
  // -- Learn
  testPageLink('Key concepts', '/key-concepts/', 'footer');
  testPageLink('Papers', '/papers/', 'footer');
  testPageLink('Blog', 'https://blog.vega.xyz/', 'footer', true);
  testPageLink('Talks', '/talks/', 'footer');
  // -- Develop
  testPageLink('Get started', '/develop/', 'footer');
  testPageLink('Explore the docs', 'https://docs.vega.xyz', 'footer', true);
  testPageLink('Get the code', 'https://github.com/vegaprotocol', 'footer', true);
  // -- Use
  testPageLink('Use the network', '/use/', 'footer');
  testPageLink('Stake tokens', 'https://token.vega.xyz/staking/', 'footer', true);
  testPageLink('Configure the network', 'https://token.vega.xyz/governance', 'footer', true);
  testPageLink('Get tokens', '/community/#contributions', 'footer');
  testPageLink('Fairground (Testnet)', 'https://fairground.wtf/', 'footer', true);
  // -- Community
  testPageLink('Join the community', '/community/', 'footer');
  testPageLink('Careers', '/careers/', 'footer');
  testPageLink('Contributors', '/community/contributors', 'footer');
  testPageLink('Partners and backers', '/partners-backers', 'footer');
  // -- Newsletter
  testPageLink('Newsletter sign up', 'https://vegacommunity.substack.com/subscribe', 'footer', true);
  // -- Connect
  testPageLink('Brand assets', 'https://github.com/vegaprotocol/brand', 'footer', true);
  testPageLink('Contribute to Vega', 'https://github.com/vegaprotocol/', 'footer', true);
  testPageLink('Privacy & Cookie Policy', '/privacy/', 'footer');
  
  // Connect links do not have link text, so we cannot use testPageLink.
  // A simple loop will do here.
  const connectLinks = [
    'https://twitter.com/vegaprotocol',
    'https://vega.xyz/discord',
    'https://github.com/vegaprotocol',
    'https://t.me/vegacommunity/'
  ]

  connectLinks.forEach((link, index) => {
    it(`The Connect section has a link to ${link}`, () => {
      cy.get('div').contains('Connect').siblings('a').eq(index)
          .should('have.attr', 'href', link)
          .should('have.attr', 'target', '_blank')
    });
  });
});
