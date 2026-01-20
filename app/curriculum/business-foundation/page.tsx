export default function BusinessFoundation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Module 1: Business Foundation & Profit Maximization
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              The Goal: From Care-Centered to Profit-Centered
            </h2>
            <p className="text-gray-700 mb-4">
              Before looking for a house, the owner must define the "Why" and the "How Much." 
              This module teaches consultants to help owners transition from a "care-centered" 
              mindset to a "profit-centered" model that allows for superior care through financial stability.
            </p>
          </section>

          <section className="mb-8 bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              1. Financial Reality Check
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Medicaid Model</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>High volume, low margin</li>
                  <li>Vulnerable to state budget cuts</li>
                  <li>Fixed rates based on CARE Assessment</li>
                  <li>Limited "add-on" potential</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Private Pay Model</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Lower volume (selective), high margin</li>
                  <li>Allows for higher staffing and better owner quality of life</li>
                  <li>Negotiated rates based on Level of Care</li>
                  <li>Significant "add-on" revenue potential</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              2. Goal Setting: Calculating the "Owner's Draw"
            </h2>
            <p className="text-gray-700 mb-4">
              The owner must calculate how much profit they need to justify the 24/7 responsibility. 
              This is not just about covering expenses—it's about building a sustainable business.
            </p>
            <div className="bg-white border-2 border-primary-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Owner's Draw Formula:</h3>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                Monthly Revenue - Operating Expenses - Staff Salaries = Owner's Draw
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                A financially sound AFH should generate $15,000-$22,000/month in net profit 
                for a 6-bed home with high private-pay ratios.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              3. The Scalability Mindset
            </h2>
            <p className="text-gray-700 mb-4">
              Moving from "Caregiver-Owner" to "Business-Administrator" is critical for long-term success.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h3 className="font-semibold text-red-900 mb-2">Caregiver-Owner</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Works 24/7 in the home</li>
                  <li>• Handles all direct care</li>
                  <li>• No time for business growth</li>
                  <li>• Burnout risk</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="font-semibold text-green-900 mb-2">Business-Administrator</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Hires and manages staff</li>
                  <li>• Focuses on business operations</li>
                  <li>• Time for growth and optimization</li>
                  <li>• Sustainable long-term</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              4. Case Study: Medicaid vs. Private Pay
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                    <th className="border border-gray-300 px-4 py-2">Medicaid Resident</th>
                    <th className="border border-gray-300 px-4 py-2">Private Pay Resident</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Monthly Rate</td>
                    <td className="border border-gray-300 px-4 py-2">$4,000-$4,500</td>
                    <td className="border border-gray-300 px-4 py-2">$8,500-$12,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Rate Determination</td>
                    <td className="border border-gray-300 px-4 py-2">Fixed by DSHS</td>
                    <td className="border border-gray-300 px-4 py-2">Negotiated</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Add-On Fees</td>
                    <td className="border border-gray-300 px-4 py-2">Limited</td>
                    <td className="border border-gray-300 px-4 py-2">Significant</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Net Profit After Staffing</td>
                    <td className="border border-gray-300 px-4 py-2">$500-$1,000</td>
                    <td className="border border-gray-300 px-4 py-2">$3,000-$5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-xl font-semibold text-yellow-900 mb-3">
              Consultant's Key Takeaway
            </h2>
            <p className="text-yellow-800">
              The profit is found in the selection, not just the care. By guiding owners to 
              select the right location (high-wealth areas) and the right clients (private pay), 
              you help them build a financially resilient business that can provide superior care 
              while generating real profit.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

