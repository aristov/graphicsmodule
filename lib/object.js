import { Group } from 'ariamodule'

/**
 * @summary A section of a graphics-document that represents
 *  a distinct object or sub-component with semantic meaning.
 *  A graphical object may itself have nested sub-components.
 * @see https://www.w3.org/TR/graphics-aria/#graphics-object
 */
export class GraphicsObject extends Group {
    /**
     * @returns {string}
     */
    static get role() {
        return 'graphics-object'
    }
}
