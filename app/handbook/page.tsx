export default function MasterHandbook() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AFH Success Consultant's Master Handbook
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          The definitive guide for advising prospective owners. This handbook consolidates 
          all "cookbook" strategies from the training into a structured, professional manual.
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-6">
              I. The 3 Pillars of AFH Excellence
            </h2>
            <p className="text-gray-700 mb-6">
              To build a sustainable business, a consultant must audit these three areas for every client:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                  1. Financial Engineering & Viability
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Tiered Pricing:</strong> Move clients away from flat-rate models to acuity-based tiers (Low, Moderate, High, Intensive)</li>
                  <li><strong>Add-on Services:</strong> Ensure separate billing for Nurse Delegation ($250–$500/mo), incontinence supplies, and specialized dietary programs</li>
                  <li><strong>Medicaid Strategy:</strong> Implement a mandatory 24-month private-pay period before allowing Medicaid conversion</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                  2. Medication System Integrity (WAC 388-76-10430)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>The 7-Question Rule:</strong> Every caregiver must answer 7 critical questions for every drug</li>
                  <li><strong>Documentation Standards:</strong> Zero tolerance for "ditto" marks, pencil entries, or white-out on the MAR</li>
                  <li><strong>Security:</strong> Verify "double-locking" of all narcotics and secure storage for all medications</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">
                  3. Resident Rights & Disclosures (WAC 388-76-10510+)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>The Admission Packet:</strong> Must contain Notice of Rights, Disclosure of Services, and Disclosure of Charges</li>
                  <li><strong>Privacy & Dignity:</strong> Ensure physical supports like window blinds and lever-style door handles</li>
                  <li><strong>Transparency:</strong> All fees and refund policies must be disclosed prior to exchange of funds</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-primary-700 mb-6">
              II. Mandatory Notice Timeline Reference
            </h2>
            <p className="text-gray-700 mb-4">
              Keep this table at the front of your consultant binder:
            </p>
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-primary-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Notice Period</th>
                    <th className="border border-gray-300 px-4 py-2">Purpose of Notice</th>
                    <th className="border border-gray-300 px-4 py-2">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">14 Days</td>
                    <td className="border border-gray-300 px-4 py-2">Rate increase due to decline in health/condition</td>
                    <td className="border border-gray-300 px-4 py-2">WAC 388-76-10540</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">30 Days</td>
                    <td className="border border-gray-300 px-4 py-2">Voluntary rate increase (Standard/Inflation)</td>
                    <td className="border border-gray-300 px-4 py-2">WAC 388-76-10522</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">30 Days</td>
                    <td className="border border-gray-300 px-4 py-2">Refund of deposits after resident vacates</td>
                    <td className="border border-gray-300 px-4 py-2">RCW 70.129.150</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">90 Days</td>
                    <td className="border border-gray-300 px-4 py-2">Notice of intent to convert to Medicaid</td>
                    <td className="border border-gray-300 px-4 py-2">WAC 388-76-10522</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">24 Months</td>
                    <td className="border border-gray-300 px-4 py-2">Mandatory review of Resident Rights with resident</td>
                    <td className="border border-gray-300 px-4 py-2">WAC 388-76-10530</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-700 mb-6">
              III. The Consultant's "Sales Closer" Script
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <p className="text-gray-800 mb-4">
                When an owner is hesitant to pay for your concierge services, remind them of the Cost of Ignorance:
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700">
                "DSHS does not provide a roadmap; they provide a scorecard. One documentation error 
                on your MAR or one missing disclosure in your contract can lead to a 'Stop Placement' 
                or thousands in fines."
              </blockquote>
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700 mt-4">
                "By implementing my Financial Engineering model, you are shifting from a 'working owner' 
                to a 'business owner' with a profitable draw."
              </blockquote>
            </div>
          </section>

          <section className="mb-12 bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">
              Consultant's Daily Success Habit
            </h2>
            <ul className="list-disc list-inside space-y-2 text-green-800">
              <li><strong>Morning:</strong> Review one WAC section to stay sharp</li>
              <li><strong>Afternoon:</strong> Reach out to 3 prospective owners or referral partners</li>
              <li><strong>Evening:</strong> Audit one "Mock MAR" or "Disclosure" for current clients</li>
            </ul>
          </section>

          <section className="bg-primary-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">
              You Have Successfully Completed the Master Certification
            </h2>
            <p className="text-primary-800">
              You now possess a world-class library of scripts, checklists, exams, and legal templates 
              to dominate the AFH advisory market.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

