"use client";

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "@/store/store";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isLoadingSubscription = subscription === undefined;

  const isSubscribed =
    subscription?.status === "active" && subscription?.role === "pro";

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    //push a document into firestore database
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1OE39RFKgl6eb2Or6Qxis9za",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    ); 
    // ... strpe extension on firebase creates a check out session
    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        // Show an error to your customer and 
        // inspect your cloud function logs in the firebase console
        alert(`An error occured: ${error.message}`);
        setLoading(false);
      }

      if (url) {
        // We have a Stripe Checkout Url, let's redirect.
        window.location.assign(url);
        setLoading(false);
      }
    });

    // redirect user to check out page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed show me the user is subscribed */}

      <button 
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-full bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        {isSubscribed ? (
          <ManageAccountButton />
        ) : isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
          "Sign Up"
        )}
      </button>
    </div>
  );
}

export default CheckoutButton;
