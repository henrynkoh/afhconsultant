export default function ChecklistsPage() {
  const checklists = [
    {
      title: 'Initial Inspection Preparation Checklist',
      description: 'Complete all requirements before scheduling your RCS inspection',
      items: [
        'AFH License posted in common area',
        'Emergency evacuation floor plan posted on each level',
        '72-hour emergency food and water supply',
        'All medications in locked storage',
        'Water temperature between 105°F and 120°F',
        'Fire drill log current (within 60 days)',
        'Personnel files secured and complete',
        'Disclosure of Charges forms ready'
      ]
    },
    {
      title: 'Resident Rights Compliance Audit',
      description: 'Verify that every WAC-mandated right is physically and operationally supported',
      items: [
        'Notice of Rights and Services packet provided',
        'WAC 388-10510 through 388-10645 attached',
        'Disclosure of Services (DSHS 10-508) completed',
        'Disclosure of Charges (DSHS 15-449) signed',
        'Window privacy (curtains/blinds) in all bedrooms',
        'Lever-style door handles (ADA compliant)',
        'DSHS Complaint Hotline posted',
        'Ombudsman contact information visible'
      ]
    },
    {
      title: 'Medication System Audit',
      description: 'Ensure compliance with WAC 388-76-10430',
      items: [
        'All medications in locked storage',
        'Narcotics in double-locked compartment',
        'MAR documentation in permanent ink',
        'No "ditto" marks on MAR',
        'Signature key on back of MAR',
        '7 Important Questions answered for each medication',
        'Expired medications removed',
        'Refrigerated medications in locked container'
      ]
    },
    {
      title: 'First 30 Days Post-Licensing Audit',
      description: 'Critical items to verify in the first month of operation',
      items: [
        'Negotiated Care Plan (NCP) implemented',
        'Medication Assistance Level assessed',
        'Liability insurance active ($500K/$1M)',
        'All required postings visible',
        'Emergency supplies maintained',
        'Fire drills conducted for all shifts',
        'Resident records complete and secured',
        'Medicaid contract processed (if applicable)'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Compliance Checklists
        </h1>
        <p className="text-xl text-gray-700 mb-12">
          Professional audit tools to ensure your AFH meets all regulatory requirements 
          and passes state surveys with zero deficiencies.
        </p>

        <div className="space-y-8">
          {checklists.map((checklist, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary-700 mb-3">
                {checklist.title}
              </h2>
              <p className="text-gray-600 mb-6">{checklist.description}</p>
              <div className="space-y-3">
                {checklist.items.map((item, itemIdx) => (
                  <label key={itemIdx} className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border-l-4 border-primary-500 p-6 rounded">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">
            Consultant Pro-Tip
          </h2>
          <p className="text-primary-800">
            Use these checklists during your initial consultation with new clients. 
            Identifying deficiencies before they become citations saves owners thousands 
            in fines and protects their license.
          </p>
        </div>
      </div>
    </div>
  )
}

