import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBalanceScale,
  faBriefcase,
  faChartLine,
  faDollarSign,
  faGraduationCap,
  faHandshake,
  faSyncAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/pages/careers.css'

const WHY_WORK_ITEMS = [
  {
    icon: faGraduationCap,
    title: 'Professional Growth',
    text: 'Continuous learning opportunities, certifications, and career development programs to help you reach your full potential.',
  },
  {
    icon: faUsers,
    title: 'Collaborative Environment',
    text: 'Work with a diverse team of experts in a supportive and inclusive workplace that values every voice.',
  },
  {
    icon: faChartLine,
    title: 'Career Advancement',
    text: 'Clear career paths and opportunities for advancement based on performance and dedication.',
  },
  {
    icon: faBalanceScale,
    title: 'Work-Life Balance',
    text: 'Flexible working arrangements and policies that support your personal and professional well-being.',
  },
  {
    icon: faDollarSign,
    title: 'Competitive Benefits',
    text: 'Attractive compensation packages, health insurance, and other benefits that recognize your contribution.',
  },
  {
    icon: faHandshake,
    title: 'Impactful Work',
    text: 'Make a real difference by helping businesses achieve their financial goals and regulatory compliance.',
  },
]

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Submit Application',
    text: 'Fill out the application form and upload your resume and cover letter.',
  },
  {
    step: 2,
    title: 'Initial Review',
    text: 'Our HR team reviews your application and qualifications.',
  },
  {
    step: 3,
    title: 'Interview',
    text: 'Selected candidates are invited for an interview with the hiring team.',
  },
  {
    step: 4,
    title: 'Offer & Onboarding',
    text: 'Successful candidates receive an offer and begin their journey with us.',
  },
]

export default function CareersPage() {
  const navigate = useNavigate()

  const handleCheckAgain = () => {
    navigate(0)
  }

  return (
    <div className="careers-page">
      <div className="careersHeroSection">
        <div className="careersHeroOverlay" aria-hidden="true" />
        <div className="careersHeroContent">
          <h1 className="careersHeroTitle">Join Our Team</h1>
          <p className="careersHeroSubtitle">Build Your Career with FI Consultancy</p>
          <p className="careersHeroDescription">
            We&apos;re looking for talented individuals who are passionate about
            financial services and ready to make an impact.
          </p>
        </div>
      </div>

      <div className="careersContentSection">
        <div className="careersWhyWorkWithUs">
          <h2>Why Work With Us?</h2>
          <div className="whyWorkGrid">
            {WHY_WORK_ITEMS.map((item) => (
              <div key={item.title} className="whyWorkCard">
                <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="careersOpenPositions">
          <h2>Open Positions</h2>
          <p className="positionsSubtitle">
            Explore current opportunities to join our team
          </p>

          <div className="noPositionsMessage">
            <div className="noPositionsIcon">
              <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
            </div>
            <h3>No Open Positions at the Moment</h3>
            <p>
              We currently don&apos;t have any open positions, but we&apos;re always
              looking for talented individuals to join our team.
            </p>
            <p className="checkBackMessage">
              Please check back later for new opportunities, or submit a general
              application below and we&apos;ll keep you in mind for future openings.
            </p>
            <button
              type="button"
              className="checkBackButton"
              onClick={handleCheckAgain}
            >
              <FontAwesomeIcon icon={faSyncAlt} aria-hidden="true" /> Check Again
            </button>
          </div>
        </div>

        <div className="careersApplicationProcess">
          <h2>Application Process</h2>
          <div className="processSteps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="processStep">
                <div className="stepNumber">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="careersGeneralApplication">
          <div className="generalApplicationContent">
            <h2>Don&apos;t See a Match?</h2>
            <p>
              We&apos;re always looking for talented individuals. Send us your resume
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link to="/contact" className="generalApplyButton">
              Submit General Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
