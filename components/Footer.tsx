import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AFH Consultant</h3>
            <p className="text-gray-400">
              Complete training curriculum for Adult Family Home consultants, 
              advisors, and concierges.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Curriculum</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/curriculum/business-foundation" className="hover:text-white">Business Foundation</Link></li>
              <li><Link href="/curriculum/site-selection" className="hover:text-white">Site Selection</Link></li>
              <li><Link href="/curriculum/pricing" className="hover:text-white">Pricing Strategies</Link></li>
              <li><Link href="/curriculum/medication" className="hover:text-white">Medication Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tools/checklists" className="hover:text-white">Checklists</Link></li>
              <li><Link href="/tools/templates" className="hover:text-white">Templates</Link></li>
              <li><Link href="/exam" className="hover:text-white">Practice Exam</Link></li>
              <li><Link href="/handbook" className="hover:text-white">Master Handbook</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WAC 388-76 Compliance</li>
              <li>RCW 70.128 Standards</li>
              <li>DSHS Regulations</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AFH Success Consultant Curriculum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

