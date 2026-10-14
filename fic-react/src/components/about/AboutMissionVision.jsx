import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { missionVision } from '../../data/aboutContent'
import { aboutIcons } from '../../lib/aboutIcons'

export default function AboutMissionVision() {
  return (
    <div className="aboutMissionVision">
      <div className="missionCard">
        <div className="missionIcon">
          <FontAwesomeIcon icon={aboutIcons[missionVision.mission.icon]} />
        </div>
        <h2>{missionVision.mission.title}</h2>
        <p>{missionVision.mission.text}</p>
      </div>

      <div className="visionCard">
        <div className="visionIcon">
          <FontAwesomeIcon icon={aboutIcons[missionVision.vision.icon]} />
        </div>
        <h2>{missionVision.vision.title}</h2>
        <p>{missionVision.vision.text}</p>
      </div>
    </div>
  )
}
