export default function RightsServices() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Module 7: Resident Rights & Services (WAC 388-10510+)
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Course Objective
            </h2>
            <p className="text-gray-700 mb-4">
              To provide a "cookbook" for navigating the complex legal disclosures required 
              for AFH licensure and operation. This module ensures owners build a legally 
              "armored" environment that protects the fundamental rights of residents.
            </p>
          </section>

          <section className="mb-8 bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 1: The "Notice of Rights and Services" Packet
            </h2>
            <p className="text-gray-700 mb-4">
              Consultants must teach owners that admission is a legal event, not just a move-in day.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-primary-500">
              <h4 className="font-semibold mb-2">Mandatory Inclusion:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You must print and include WAC 388-10510 through 388-10645 as a physical attachment</li>
                <li>Residents do not lose any constitutional or civil rights when they move into an AFH</li>
                <li>Resident Rights document</li>
                <li>Disclosure of Services (Form 10-508)</li>
                <li>Disclosure of Charges (Form 15-449)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 2: The Disclosure of Services (DSHS 10-508)
            </h2>
            <p className="text-gray-700 mb-4">
              A realistic guide to "not overpromising but over-delivering."
            </p>
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Defining Scope</h3>
                <p className="text-gray-700 text-sm">
                  The form must accurately reflect what the home can and cannot do. 
                  If services are not listed, they cannot be provided.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">The "Reasonable Accommodation" Clause</h3>
                <p className="text-gray-700 text-sm">
                  The home must reduce the level of care if they can no longer meet 
                  a resident's needs safely.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Care vs. Skilled Nursing</h3>
                <p className="text-gray-700 text-sm">
                  Consultants must explain the difference between ADL assistance (Eating, 
                  Toileting, Walking) and Nurse Delegation (Insulin, Wound Care).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 3: The Disclosure of Charges (The Financial Shield)
            </h2>
            <p className="text-gray-700 mb-4">
              This is where most AFH owners fail. Consultants must be "Financial Policemen" here.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <h3 className="font-semibold text-red-900 mb-3">Critical Requirements:</h3>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li><strong>Prior to Receipt of Funds:</strong> All fees must be disclosed in writing before taking a single dollar</li>
                <li><strong>The Refund Mandate:</strong> You must specify the basis for retaining funds if a resident dies, is hospitalized, or is discharged</li>
                <li><strong>The 30-Day Refund Rule:</strong> Owners cannot retain funds for "reasonable wear and tear" and must provide refunds within 30 days</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Top 100 Rights & Services Questions
            </h2>
            <p className="text-blue-800 mb-4">
              These questions prepare consultants to help owners select the correct answers 
              during state exams and inspections. Each answer must be justified by WAC or best practice.
            </p>
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold mb-3">Sample Questions:</h3>
              <div className="space-y-3 text-sm">
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-gray-900 mb-1">Q: Can an owner limit a resident's visiting hours?</p>
                  <p className="text-gray-700">A: No; residents have the right to visitors at any time.</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-gray-900 mb-1">Q: Must the AFH provide the Resident Rights document in a language the resident understands?</p>
                  <p className="text-gray-700">A: Yes.</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-gray-900 mb-1">Q: Can an owner require a resident to "waive" their rights?</p>
                  <p className="text-gray-700">A: No; house rules must not ask residents to waive any rights.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <em>Full 100-question set available in the Practice Exam section.</em>
              </p>
            </div>
          </section>

          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-xl font-semibold text-yellow-900 mb-3">
              Consultant's Key Takeaway
            </h2>
            <p className="text-yellow-800">
              By ensuring owners provide complete disclosure packets and respect resident rights, 
              you protect both the resident's dignity and the owner's license. One missing disclosure 
              can result in immediate citations and potential license suspension.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

