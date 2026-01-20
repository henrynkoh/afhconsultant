export default function TemplatesPage() {
  const templates = [
    {
      title: 'Private Pay Admission Contract',
      description: 'WAC-compliant admission agreement template with all mandatory disclosures',
      sections: [
        'Parties and Purpose',
        'Financial Terms and Daily Rates',
        'Level of Care (LOC) and Additional Fees',
        'Deposits and Refunds',
        'Rate Increases and Changes',
        'Medicaid Conversion Policy',
        'Termination of Agreement'
      ]
    },
    {
      title: 'Notice of Rate Increase Letter',
      description: 'Formal 30-day notice template for rate adjustments',
      sections: [
        'Notification of Rate Adjustment',
        'Reason for Increase: Change in Condition',
        'Updated Financial Obligation',
        'Acknowledgment Section'
      ]
    },
    {
      title: 'Medicaid Conversion Policy',
      description: '14-point font policy document meeting WAC 388-76-10522 requirements',
      sections: [
        'General Disclosure Statement',
        'Policy on Medicaid Acceptance',
        'Conversion Notification Requirements',
        'Scope of Medicaid Coverage',
        'Acknowledgment and Signature'
      ]
    },
    {
      title: 'Disclosure of Charges Form',
      description: 'Complete fee disclosure template (DSHS 15-449 style)',
      sections: [
        'Base Monthly Rate',
        'Level of Care Fees',
        'Add-On Services',
        'Admission Fees',
        'Refund Policies'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Legal Templates
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          WAC-compliant forms and contracts ready for use. All templates include 
          mandatory language and can be customized for your clients.
        </p>

        <div className="space-y-8">
          {templates.map((template, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-700 mb-3">
                {template.title}
              </h2>
              <p className="text-gray-600 mb-6">{template.description}</p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Template Sections:</h3>
                <ul className="space-y-2">
                  {template.sections.map((section, sectionIdx) => (
                    <li key={sectionIdx} className="text-gray-700 flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition">
                Download Template
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h2 className="text-xl font-semibold text-yellow-900 mb-3">
            Important Legal Disclaimer
          </h2>
          <p className="text-yellow-800">
            These templates are based on Washington State WAC and RCW requirements. 
            While they provide a solid foundation, consultants should review all contracts 
            with their clients and ensure they meet the specific needs of each AFH. 
            For complex legal matters, consult with an attorney specializing in healthcare law.
          </p>
        </div>
      </div>
    </div>
  )
}

