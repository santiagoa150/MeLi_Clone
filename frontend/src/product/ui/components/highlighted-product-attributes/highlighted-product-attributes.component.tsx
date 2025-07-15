import type { JSX } from 'react';
import type { ProductDetail } from '../../../model/product-detail.ts';

/**
 * HighlightedProductAttributesComponent is a functional component that displays highlighted attributes of a product.
 * @param detail - The product detail object containing product information.
 * @param listTextClassName - The CSS class name to apply to the list text.
 */
export function HighlightedProductAttributesComponent({
    detail,
    listTextClassName,
}: {
    detail: ProductDetail;
    listTextClassName: string;
}): JSX.Element {
    const highlightedAttributes = detail.product.attributes.filter((attr) => attr.highlighted);
    return (
        <>
            <h1>Lo que tienes que saber de este producto</h1>
            <ul className="flex flex-col gap-y-2 list-disc list-inside pl-5">
                {highlightedAttributes.map((attr, index) => (
                    <li key={index}>
                        <span className={listTextClassName}>
                            {attr.name}: {attr.value}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}
