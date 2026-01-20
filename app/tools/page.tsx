import Link from 'next/link'

export default function ToolsPage() {
  const toolCategories = [
    {
      id: 'checklists',
      title: 'Compliance Checklists',
      description: 'Audit tools to ensure your AFH meets all regulatory requirements',
      tools: [
        'Initial Inspection Preparation Checklist',
        'Resident Rights Compliance Audit',
        'Medication System Audit',
        'First 30 Days Post-Licensing Audit',
        'Emergency Supply Inventory Tracker',
        'Medication Room Audit Checklist'
      ]
    },
    {
      id: 'templates',
      title: 'Legal Templates',
      description: 'WAC-compliant forms and contracts ready for use',
      tools: [
        'Private Pay Admission Contract',
        'Notice of Rate Increase Letter',
        'Medicaid Conversion Policy',
        'Disclosure of Charges Form',
        'Disclosure of Services (DSHS 10-508)',
        'New Resident Financial Intake Checklist'
      ]
    },
    {
      id: 'calculators',
      title: 'Financial Calculators',
      description: 'Tools to optimize pricing and revenue',
      tools: [
        'Daily Rate Calculator',
        'Revenue Optimization Tool',
        'Market Analysis Template',
        'Owner\'s Draw Calculator',
        'Profit Leak Diagnostic'
      ]
    },
    {
      id: 'scripts',
      title: 'Sales & Marketing Scripts',
      description: 'Professional scripts for closing deals and building relationships',
      tools: [
        'Hospital Discharge Planner Pitch',
        'Family Tour Script (Concierge)',
        'Rate Increase Conversation Guide',
        'Medicaid Conversion Explanation',
        'Value Comparison Worksheet'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Consultant Tools & Resources
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Professional-grade tools, templates, and calculators to help you guide 
          AFH owners from start to finish.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {toolCategories.map((category) => (
            <Link
              key={category.id}
              href={`/tools/${category.id}`}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-primary-700 mb-3">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.tools.map((tool, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-primary-600 font-medium">
                View All Tools →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border-l-4 border-primary-500 p-6 rounded">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">
            Master Timeline Cheat Sheet
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 bg-white">
              <thead>
                <tr className="bg-primary-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Action Type</th>
                  <th className="border border-gray-300 px-4 py-2">Notice Required</th>
                  <th className="border border-gray-300 px-4 py-2">WAC / RCW Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Increase Fee (Health Decline)</td>
                  <td className="border border-gray-300 px-4 py-2">14 Days</td>
                  <td className="border border-gray-300 px-4 py-2">WAC 388-76-10540</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Increase Fee (Standard/Inflation)</td>
                  <td className="border border-gray-300 px-4 py-2">30 Days</td>
                  <td className="border border-gray-300 px-4 py-2">WAC 388-76-10522</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Refund of Deposits/Prepaid Funds</td>
                  <td className="border border-gray-300 px-4 py-2">Within 30 Days</td>
                  <td className="border border-gray-300 px-4 py-2">RCW 70.129.150</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Medicaid Conversion Notice</td>
                  <td className="border border-gray-300 px-4 py-2">90 Days</td>
                  <td className="border border-gray-300 px-4 py-2">WAC 388-76-10522</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Review Rights & Services Packet</td>
                  <td className="border border-gray-300 px-4 py-2">Every 24 Months</td>
                  <td className="border border-gray-300 px-4 py-2">WAC 388-76-10530</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

