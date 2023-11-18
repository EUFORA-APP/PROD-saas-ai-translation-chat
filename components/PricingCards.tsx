import { CheckIcon } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter Tier",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Anywhere, anytime, start Chating with anyone.",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms Limit",
      "Supports 2 Languages", //all
      "72-hour support response time", //Business Days only
    ],
  },
  {
    name: "Pro Tier",
    id: "", //stripe subscription id
    href: "#",
    priceMonthly: "£0.99", //$?
    description: "Pro Tier, Unlock Your Full Potential.",
    features: [
      "Chats, Unlimited Messages",
      "Participants in Chats, Unlimited",
      "Chat Rooms, Unlimited",
      "10 Languages, it supports",//add *
      "24-hour, dedicated support response time",
      "Early access to New Features",
      "Coming Soon, access to Multimedia support in chats",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div 
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-900">
                     /month   
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    Free
                  </span>
                 )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul
                  role="list"
                  className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                  />
                  {feature}
                  </li>
                ))}
              </ul>
            </div>

          {redirect ? (
            <Link href='/register'>
              Get Started Today
            </Link>
          ): (
            tier.id && <CheckoutButton />
          )
          )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
