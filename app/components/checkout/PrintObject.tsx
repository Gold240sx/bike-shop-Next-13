import type { Stripe } from "stripe"

export default function PrintObject({
	content,
	className,
}: {
	content: Stripe.PaymentIntent | Stripe.Checkout.Session
	className: string
}): JSX.Element {
	const formattedContent: string = JSON.stringify(content, null, 2)
	return <pre className={className}>{formattedContent}</pre>
}
