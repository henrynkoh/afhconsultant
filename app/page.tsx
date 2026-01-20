import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AFH Success Consultant Curriculum
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Complete training program for consultants, advisors, and concierges 
            helping prospective owners launch and operate financially sound Adult Family Homes
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/curriculum"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Start Learning
            </Link>
            <Link 
              href="/exam"
              className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Take Practice Exam
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why This Curriculum?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Practical Cookbook Guidance
              </h3>
              <p className="text-gray-600">
                Step-by-step instructions from LLC setup through licensing, 
                avoiding trial and error with proven strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Financial Mastery
              </h3>
              <p className="text-gray-600">
                Learn to maximize private-pay ratios, implement tiered pricing, 
                and build high-margin operations that generate real profit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Master WAC 388-76 requirements for medication systems, 
                resident rights, and disclosures to pass surveys with zero deficiencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Complete Curriculum Modules
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Link href="/curriculum/business-foundation" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 1: Business Foundation & Profit Maximization</h3>
              <p className="text-gray-700">Understanding margins, owner's draw, and moving from caregiver to business administrator</p>
            </Link>
            <Link href="/curriculum/site-selection" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 2: Strategic Site Selection</h3>
              <p className="text-gray-700">Wealth mapping, competitor analysis, and identifying high-acuity market gaps</p>
            </Link>
            <Link href="/curriculum/pricing" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 3: Pricing Strategies & Competitive Positioning</h3>
              <p className="text-gray-700">Tiered pricing models, level-of-care fees, and psychological pricing tactics</p>
            </Link>
            <Link href="/curriculum/marketing" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 4: Marketing to Private Pay Residents</h3>
              <p className="text-gray-700">Referral networks, hospital discharge planners, and closing high-value contracts</p>
            </Link>
            <Link href="/curriculum/billing" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 5: Disclosure & Billing Compliance</h3>
              <p className="text-gray-700">WAC-compliant disclosures, invoicing systems, and revenue protection</p>
            </Link>
            <Link href="/curriculum/medication" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 6: Medication Systems (WAC 388-76-10430)</h3>
              <p className="text-gray-700">Strong medication systems, MAR documentation, and clinical safety protocols</p>
            </Link>
            <Link href="/curriculum/rights-services" className="block bg-primary-50 p-6 rounded-lg hover:bg-primary-100 transition">
              <h3 className="text-xl font-semibold mb-2 text-primary-900">Module 7: Resident Rights & Services (WAC 388-10510+)</h3>
              <p className="text-gray-700">Notice of rights, disclosure requirements, and legal compliance frameworks</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Consultant Tools & Resources
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/tools/checklists" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Compliance Checklists</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Initial Inspection Preparation</li>
              <li>• Resident Rights Audit</li>
              <li>• Medication System Audit</li>
              <li>• First 30 Days Post-Licensing</li>
            </ul>
          </Link>
          <Link href="/tools/templates" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Legal Templates</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Private Pay Admission Contract</li>
              <li>• Notice of Rate Increase</li>
              <li>• Medicaid Conversion Policy</li>
              <li>• Disclosure of Charges Forms</li>
            </ul>
          </Link>
          <Link href="/tools/calculators" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Financial Calculators</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Daily Rate Calculator</li>
              <li>• Revenue Optimization Tool</li>
              <li>• Market Analysis Template</li>
            </ul>
          </Link>
          <Link href="/tools/scripts" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-primary-700">Sales & Marketing Scripts</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Hospital Discharge Planner Pitch</li>
              <li>• Family Tour Script</li>
              <li>• Rate Increase Conversation</li>
            </ul>
          </Link>
        </div>
      </section>
    </div>
  )
}

