import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  { 
    name: "Starter Tier",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Anywhere, anytime, start talking with anyone.",
    features: [
      "Chat Limit, 20 Messages in Chats",
      "Limit for Chats, 2 Participants",
      "Limit, 3 Chat Rooms",
      "2 Languages, supported",
    ],
  },
  {
    name: "Pro Membership",
    id: "pro", 
    href: "#",
    priceMonthly: "$6.99",
    description: "Pro Membership, Unlock Your Full Potential.",
    features: [
      "Create chats for Business and Friends, Unlimited Messages",
      "Participants in Chats, Unlimited",
      "Chat Rooms, Unlimited",
      "Learn a new language, explore, communicate with ease.",
      "20+ Languages, more on the way!", 
      "Around the World, Anyone, Anytime",
      "Early access to New Features",
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
              <Link 
                href='/register'
                className="mt-8 block rounded-full bg-gradient-to-r from-[#4ce1d0] via-[#a153eb] to-[#dd4c8d] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
              >
                Get Started Today
              </Link>
            ): (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
//38-106 lgtm 32830
