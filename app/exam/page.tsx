'use client'

import { useState } from 'react'

interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correct: number
  explanation: string
  wac?: string
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: 'Licensing & Application',
    question: 'What specific documents must be present in the licensing packet submitted to the BAAU?',
    options: [
      'A scaled copy of the AFH floor plan, a valid Washington State Business License, and copies of completed background authorization forms',
      'Only the floor plan and business license',
      'A business plan and list of competitors',
      'Background checks and a copy of the owner\'s driver\'s license'
    ],
    correct: 0,
    explanation: 'All three documents (floor plan, business license, and background authorization forms) are mandatory. Missing just one can delay licensing by months.',
    wac: 'WAC 388-76-10100'
  },
  {
    id: 2,
    category: 'Medication Systems',
    question: 'Can you use "ditto" marks (") on a Medication Administration Record (MAR)?',
    options: [
      'Yes, it saves time',
      'No; it is a legal document requiring individual entries',
      'Only for non-narcotic medications',
      'Only if the pharmacist pre-prints them'
    ],
    correct: 1,
    explanation: 'Every entry on a MAR must be distinct and individual. Ditto marks are considered a documentation error and a safety risk.',
    wac: 'WAC 388-76-10430'
  },
  {
    id: 3,
    category: 'Resident Rights',
    question: 'Can an owner limit a resident\'s visiting hours to only daytime?',
    options: [
      'Yes, if it\'s in the house rules',
      'No; residents have the right to visitors at any time',
      'Only for safety reasons',
      'Yes, with 30 days notice'
    ],
    correct: 1,
    explanation: 'Residents retain all their civil rights when moving into an AFH. Limiting visiting hours violates their fundamental rights.',
    wac: 'WAC 388-76-10510'
  },
  {
    id: 4,
    category: 'Financial & Billing',
    question: 'What is the mandatory notice period for a voluntary rate increase?',
    options: [
      '14 days',
      '30 days',
      '60 days',
      '90 days'
    ],
    correct: 1,
    explanation: 'WAC 388-76-10522 requires at least 30 days written notice for voluntary rate increases. Verbal notice is never sufficient.',
    wac: 'WAC 388-76-10522'
  },
  {
    id: 5,
    category: 'Safety & Emergency',
    question: 'What is the minimum threshold for emergency food and water supplies for all residents and household members?',
    options: [
      '10 hours',
      '24 hours',
      '72 hours (3 days)',
      'One week'
    ],
    correct: 2,
    explanation: 'WAC 388-76-10755 requires a minimum 72-hour supply of shelf-stable food and one gallon of water per person per day.',
    wac: 'WAC 388-76-10755'
  }
]

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    if (answered) return
    setSelectedAnswer(optionIndex)
    setAnswered(true)
    if (optionIndex === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setAnswered(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setAnswered(false)
    }
  }

  const question = sampleQuestions[currentQuestion]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AFH Consultant Practice Exam
        </h1>
        <p className="text-gray-700 mb-8">
          Test your knowledge across Business Operations, Medication Systems, and Resident Rights. 
          A passing score of 90% is required for certification.
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
            <span>Score: {score} / {currentQuestion + 1}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
          <div className="mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
              {question.category}
            </span>
            {question.wac && (
              <span className="ml-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {question.wac}
              </span>
            )}
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isCorrect = idx === question.correct
              const isSelected = idx === selectedAnswer
              let bgColor = 'bg-white border-gray-300'
              
              if (answered) {
                if (isCorrect) {
                  bgColor = 'bg-green-100 border-green-500'
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-red-100 border-red-500'
                }
              } else if (isSelected) {
                bgColor = 'bg-primary-50 border-primary-500'
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={answered}
                  className={`w-full text-left p-4 border-2 rounded-lg transition ${bgColor} ${
                    !answered ? 'hover:border-primary-400 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + idx)}.</span>
                    <span>{option}</span>
                    {answered && isCorrect && (
                      <span className="ml-auto text-green-600 font-bold">✓ Correct</span>
                    )}
                    {answered && isSelected && !isCorrect && (
                      <span className="ml-auto text-red-600 font-bold">✗ Incorrect</span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {answered && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Explanation:</h3>
              <p className="text-blue-800">{question.explanation}</p>
              {question.wac && (
                <p className="text-sm text-blue-700 mt-2">
                  <strong>Legal Basis:</strong> {question.wac}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === sampleQuestions.length - 1}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700"
          >
            Next Question
          </button>
        </div>

        {/* Final Score */}
        {currentQuestion === sampleQuestions.length - 1 && answered && (
          <div className="mt-8 bg-primary-50 border-2 border-primary-500 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-2">
              Exam Complete!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Your Score: {score} / {sampleQuestions.length} 
              ({Math.round((score / sampleQuestions.length) * 100)}%)
            </p>
            {score >= sampleQuestions.length * 0.9 ? (
              <p className="text-green-700 font-semibold text-xl">
                ✓ Master Consultant - Ready to lead high-level business strategy!
              </p>
            ) : score >= sampleQuestions.length * 0.7 ? (
              <p className="text-yellow-700 font-semibold text-xl">
                Junior Consultant - Needs more work on advanced concepts
              </p>
            ) : (
              <p className="text-red-700 font-semibold text-xl">
                Needs Review - Re-study the curriculum modules
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

