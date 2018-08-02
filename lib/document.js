import { ARIADocument } from 'ariamodule'

/**
 * @summary A type of document in which the visual appearance or layout of content conveys meaning.
 * @see https://www.w3.org/TR/graphics-aria/#graphics-document
 */
export class GraphicsDocument extends ARIADocument {
    /**
     * @returns {string}
     */
    static get role() {
        return 'graphics-document'
    }
}
