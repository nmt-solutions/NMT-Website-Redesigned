import { getSubscriptions } from "@/database/operations";
import React from "react";

const Subscriptions = async () => {
  const subs = await getSubscriptions();
  return (
    <section id="subscriptions">
      <h3 className="text-xl font-normal my-8">
        Manage Subscriptions / Newsletters
      </h3>
      <section id="subs-table" className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Subscriber Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((sub) => (
              <tr
                key={sub.subscriptionId}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="border px-4 py-2">{sub.fullname}</td>
                <td className="border px-4 py-2">{sub.businessEmail}</td>
                <td className="border px-4 py-2">{sub.phone}</td>
                <td className="border px-4 py-2">{sub.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Subscriptions;
