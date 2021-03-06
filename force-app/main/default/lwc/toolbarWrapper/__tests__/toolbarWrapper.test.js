import { createElement } from 'lwc';
import ToolbarWrapper from 'c/toolbarWrapper';

describe('c-toolbar-wrapper', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('shows inner component using c-example-wrapper', () => {
        const element = createElement('c-toolbar-wrapper', {
            is: ToolbarWrapper
        });
        document.body.appendChild(element);

        // Verify required child components are present on render.
        const exampleEl = element.shadowRoot.querySelector('c-example-wrapper');
        expect(exampleEl).not.toBeNull();

        const innerEl = exampleEl.querySelector('c-toolbar');
        expect(innerEl).not.toBeNull();
    });
});
