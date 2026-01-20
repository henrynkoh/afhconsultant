export default function MedicationSystems() {
  const questions = [
    { q: "Which WAC requires a 'strong medication system'?", a: "WAC 388-76-10430" },
    { q: "Can you use 'ditto' marks on a MAR?", a: "No; it is a legal document requiring individual entries." },
    { q: "Where must all medications be stored?", a: "In a locked storage area." },
    { q: "What is the storage requirement for narcotics?", a: "A separate, permanently attached, double-locked compartment." },
    { q: "What are the '7 Important Questions' before giving a med?", a: "Name, Purpose, Effect, Timing, Side Effects, Interactions, and Storage." },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Module 6: Medication Systems (WAC 388-76-10430)
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Course Objective
            </h2>
            <p className="text-gray-700 mb-4">
              To master the transition from "passing a pill" to operating a legally defensible 
              Medication Management System under WAC 388-76-10430.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 1: The Regulatory Foundation
            </h2>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">WAC 388-76-10430 (The Core Rule)</h3>
              <p className="text-gray-700 mb-4">
                Establishing a "strong medication system" that guarantees services meet the needs of each resident.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-primary-500">
                <h4 className="font-semibold mb-2">The Three Pillars of Compliance:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><strong>Assessment:</strong> Knowing exactly how much assistance the resident needs</li>
                  <li><strong>NCP (Negotiated Care Plan):</strong> Documenting that assistance level formally</li>
                  <li><strong>Medication Log (MAR):</strong> Keeping a current, accurate record of every dose</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 2: The "Seven Important Questions" Strategy
            </h2>
            <p className="text-gray-700 mb-4">
              Consultants must teach owners that they cannot administer a drug they do not understand. 
              Before any dose is given, these must be answered:
            </p>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <ol className="space-y-3 text-gray-700">
                <li><strong>Identity:</strong> What is the name/purpose of the medication?</li>
                <li><strong>Effect:</strong> What effect will it have on the resident?</li>
                <li><strong>Timing:</strong> How long until it works?</li>
                <li><strong>Side Effects:</strong> What are the adverse reactions to watch for?</li>
                <li><strong>Monitoring:</strong> Are blood tests or vitals needed (e.g., blood pressure)?</li>
                <li><strong>Interactions:</strong> Does it react with food (e.g., grapefruit juice) or other drugs?</li>
                <li><strong>Storage:</strong> Does it need refrigeration or a "double-lock" (Narcotics)?</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 3: High-Risk Clinical Management
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h3 className="font-semibold text-red-900 mb-2">The Aging Body</h3>
                <p className="text-red-800 text-sm">
                  How slower liver and kidney function increases drug toxicity risk. 
                  Older adults are more sensitive to side effects because drugs stay in their body longer.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <h3 className="font-semibold text-yellow-900 mb-2">The "Falls" Fact Sheet</h3>
                <p className="text-yellow-800 text-sm">
                  Identifying medications linked to hip fractures and falls: 
                  Benzodiazepines, Antidepressants, Opioids.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold text-green-900 mb-2">Deprescribing</h3>
                <p className="text-green-800 text-sm">
                  Learning to ask the physician if a medication can be reduced or eliminated 
                  to improve quality of life and reduce fall risk.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Module 4: Best Practices for Error Prevention
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">The "Stop" Protocol</h3>
                <p className="text-gray-700">
                  Never administer a medication if the label is different from the MAR until 
                  you verify with a pharmacist.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">OTC Rules</h3>
                <p className="text-gray-700">
                  In an AFH, Over-the-Counter drugs (like Tylenol) are treated as prescriptions. 
                  They must have a signed/dated physician's order.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">The "Golden Window"</h3>
                <p className="text-gray-700">
                  Managing the timing of administration—missing a dose and the window of time 
                  for "late" administration.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Top 100 Medication Compliance Questions
            </h2>
            <p className="text-blue-800 mb-4">
              These questions prepare consultants to answer state licensors or train new administrators. 
              Each answer must be justified by WAC or clinical best practice.
            </p>
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold mb-3">Sample Questions:</h3>
              <div className="space-y-3">
                {questions.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-3">
                    <p className="font-semibold text-gray-900 mb-1">Q: {item.q}</p>
                    <p className="text-gray-700">A: {item.a}</p>
                  </div>
                ))}
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
              Medication errors are the #1 cause of citations for new homes. By implementing 
              a "strong medication system" with proper documentation, security, and clinical 
              protocols, you protect both the resident's safety and the owner's license.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

