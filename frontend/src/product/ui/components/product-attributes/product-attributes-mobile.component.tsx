import type { JSX } from 'react';

/**
 * ProductAttributesMobileComponent displays product attributes in a mobile-friendly format.
 * @param attributes - An array of product attributes, each with values and a category.
 */
export function ProductAttributesMobileComponent({
    attributes,
}: {
    attributes: { values: { value: string; title: string }[]; category: string }[];
}): JSX.Element {
    return (
        <div className="flex flex-wrap gap-6 w-full">
            {attributes.map((section, index) => (
                <div key={index} className="w-full">
                    <h3 className="text-sm font-semibold mb-2">{section.category}</h3>
                    <div className="border rounded border-gray-100 shadow-xs">
                        {section.values.map((item, i) => (
                            <div
                                key={i}
                                className={`flex justify-between px-3 py-4  ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
                            >
                                <span className="font-medium text-sm text-gray-700">{item.title}</span>
                                <span className="text-sm text-gray-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
