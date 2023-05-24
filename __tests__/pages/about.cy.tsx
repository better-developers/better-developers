import About from '../../pages/about';

describe('<About />', () => {
    it('should render and display expected content', () => {
        // Arrange
        cy.mount(<About />);

        // Act

        // Assert
        cy.get('h2').contains('Vi er Better Developers.');
    });
});
