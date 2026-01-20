import Link from 'next/link'

export default function CurriculumIndex() {
  const modules = [
    {
      id: 'business-foundation',
      title: 'Module 1: Business Foundation & Profit Maximization',
      description: 'Understanding the thin margins of Medicaid vs. high-profit potential of Private Pay. Calculating owner\'s draw and moving from caregiver-owner to business-administrator.',
      topics: [
        'Financial Reality Check: Medicaid vs. Private Pay',
        'Goal Setting: Calculating Owner\'s Draw',
        'The Scalability Mindset',
        'Case Study: $4,000/month Medicaid vs. $8,500/month Private Pay'
      ]
    },
    {
      id: 'site-selection',
      title: 'Module 2: Strategic Site Selection (The "Where" of Wealth)',
      description: 'Location is the single biggest factor in attracting Private Pay residents. Learn wealth mapping, competitor analysis, and identifying high-acuity market gaps.',
      topics: [
        'The Affluence Radius Analysis (5-Mile Rule)',
        'Competitor Grid Development',
        'Saturation vs. Opportunity Markets',
        'High-Acuity Specialization (Dementia, Hospice, Ventilator)'
      ]
    },
    {
      id: 'pricing',
      title: 'Module 3: Pricing Strategies & Competitive Positioning',
      description: 'Moving from flat-rate pricing to level-of-care pricing. Learn offensive vs. defensive strategies and psychological pricing tactics.',
      topics: [
        'Good-Better-Best Pricing Architecture',
        'Daily Rate Strategy',
        'Penetration vs. Offensive Pricing',
        'Admission Fee Strategy'
      ]
    },
    {
      id: 'marketing',
      title: 'Module 4: Marketing to the "Golden" Resident',
      description: 'How to find and close Private Pay clients through referral networks, hospital discharge planners, and luxury marketing strategies.',
      topics: [
        'Referral Network Building',
        'Hospital Discharge Planner Scripts',
        'The "Concierge" Tour',
        'Marketing the Expertise (RN/LPN credentials)'
      ]
    },
    {
      id: 'billing',
      title: 'Module 5: Disclosure & Billing Compliance',
      description: 'Practical administration to ensure owners actually get paid. WAC-compliant disclosures, invoicing systems, and revenue protection.',
      topics: [
        'Disclosure of Charges (WAC Requirements)',
        'Admission Fee Collection',
        'Monthly vs. Daily Billing Cycles',
        'Handling Level of Care Increases'
      ]
    },
    {
      id: 'medication',
      title: 'Module 6: Medication Systems (WAC 388-76-10430)',
      description: 'Master the transition from "passing a pill" to operating a legally defensible Medication Management System.',
      topics: [
        'The Regulatory Foundation (WAC/RCW Framework)',
        'The Seven Important Questions Strategy',
        'High-Risk Clinical Management',
        'Best Practices for Error Prevention',
        'Top 100 Medication Compliance Questions'
      ]
    },
    {
      id: 'rights-services',
      title: 'Module 7: Resident Rights & Services (WAC 388-10510+)',
      description: 'Navigate the complex legal disclosures required for AFH licensure and operation. Protect resident rights while building a compliant business.',
      topics: [
        'Notice of Rights and Services Packet',
        'Disclosure of Services (DSHS 10-508)',
        'Disclosure of Charges (Financial Shield)',
        'House Rules - The "Dignity" Document',
        'Top 100 Rights & Services Questions'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AFH Success Consultant Curriculum
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Complete training program designed to transform prospective advisors into 
          "AFH Compliance Concierges" who guide owners from start to finish.
        </p>

        <div className="space-y-8">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/curriculum/${module.id}`}
              className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-primary-700 mb-3">
                {module.title}
              </h2>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Topics:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-primary-600 font-medium">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

