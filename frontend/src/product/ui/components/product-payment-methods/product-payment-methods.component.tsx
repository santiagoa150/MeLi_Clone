import type { ProductDetail } from '../../../model/product-detail.ts';

/**
 * PaymentMethods component that displays the payment methods available for a product.
 * @param detail - The product detail object containing payment methods.
 */
export const ProductPaymentMethodsComponent = ({ detail }: { detail: ProductDetail }) => {
    const paymentTitles: Record<string, string> = {
        CREDIT_CARD: 'Tarjetas de crédito',
        DEBIT_CARD: 'Tarjetas de débito',
        CASH: 'Efectivo',
    };

    const grouped = detail.paymentMethods.reduce(
        (acc, method) => {
            if (!acc[method.type]) acc[method.type] = [];
            acc[method.type].push(method);
            return acc;
        },
        {} as Record<string, { id: string; type: string; brand: string }[]>,
    );

    return (
        <>
            <h1 className="text-xl">Medios de pago</h1>
            {Object.entries(grouped).map(([type, methods]) => (
                <div key={type} className="flex flex-col gap-y-2">
                    <p>{paymentTitles[type] || type}</p>
                    <div className="flex gap-x-8 gap-y-1 flex-wrap">
                        {methods.map((method) => (
                            <img
                                key={method.id}
                                src={`${import.meta.env.VITE_API_URL}/static/payments/${method.brand}.webp`}
                                alt={method.brand}
                                className="w-15"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
