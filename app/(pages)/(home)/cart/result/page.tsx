import type { Stripe } from "stripe"

import PrintObject from "../../../../components/checkout/PrintObject"
import { stripe } from "../../../../lib/stripe"
import ClientCartRefresh from "./clientCartRefresh"

export default async function ResultPage({
	searchParams, // clearCart,
}: {
	searchParams: { session_id: string }
	// clearCart: () => void
}): Promise<JSX.Element> {
	if (!searchParams.session_id) throw new Error("Please provide a valid session_id (`cs_test_...`)")

	const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(searchParams.session_id, {
		expand: ["line_items", "payment_intent"],
	})

	const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent
	const paymentStatus = paymentIntent.status === "succeeded" ? true : false
	console.log(checkoutSession)

	return (
		<div className="flex flex-col items-center justify-center mx-auto mt-20 align-middle max-w-screen">
			<div className="w-3/4">
				<h2 className="flex mr-auto">Status: {paymentIntent.status}</h2>
				<h3 className="flex mr-auto">Checkout Session response:</h3>
				<PrintObject content={checkoutSession} className="items-start bg-zinc-900 max-h-[400px] overflow-scroll p-6" />
				<ClientCartRefresh isValid={paymentStatus} />
			</div>
		</div>
	)
}
