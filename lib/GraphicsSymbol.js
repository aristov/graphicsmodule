import { Img } from 'ariamodule'
import { Path } from 'svgmodule'

/**
 * @summary A graphical object used to convey a simple meaning or category,
 *  where the meaning is more important than the particular visual appearance.
 *  It may be a component of a larger structured graphic such as a chart or map.
 *  The symbol itself is an atomic object; children are presentational.
 * @see https://www.w3.org/TR/graphics-aria/#graphics-symbol
 */
export class GraphicsSymbol extends Img {
    /**
     * @returns {string}
     */
    static get role() {
        return 'graphics-symbol'
    }

    /**
     * @returns {class} Path
     */
    static get elementAssembler() {
        return Path
    }
}
