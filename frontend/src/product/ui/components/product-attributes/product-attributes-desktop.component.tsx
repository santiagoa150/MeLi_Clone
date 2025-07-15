import type { JSX } from 'react';

/**
 * ProductAttributesDesktopComponent displays product attributes in a grid layout.
 * @param attributes - An array of product attributes, each containing values and a category.
 */
export function ProductAttributesDesktopComponent({
    attributes,
}: {
    attributes: { values: { value: string; title: string }[]; category: string }[];
}): JSX.Element {
    const m = Math.floor(attributes.length / 2);

    return (
        <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-6 items-center">
                {attributes.map((section, index) => {
                    if (index > m) return null;
                    return (
                        <div key={index} className="w-[345px]">
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
                    );
                })}
            </div>
            <div className="flex flex-col gap-6 items-center">
                {attributes.map((section, index) => {
                    if (index <= m) return null;
                    return (
                        <div key={index} className="w-[350px]">
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
                    );
                })}
            </div>
        </div>
    );
}
