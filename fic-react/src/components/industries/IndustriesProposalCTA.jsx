import { Link } from 'react-router-dom'
import { serviceProposalCTA } from '../../data/serviceDetails'

export default function IndustriesProposalCTA() {
  return (
    <div id="proposalRequestDiv">
      <div id="proposalRequestContent">
        <div id="proposalHeading" className="proposalRequestContents">
          {serviceProposalCTA.heading}
        </div>

        <div id="proposalParagraph" className="proposalRequestContents">
          {serviceProposalCTA.paragraph}
        </div>

        <div id="proposalReachOutButtonDiv" className="proposalRequestContents">
          <Link to={serviceProposalCTA.buttonTo} className="proposalReachOutButton">
            {serviceProposalCTA.buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
