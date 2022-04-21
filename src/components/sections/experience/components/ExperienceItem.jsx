import { ReactSVG } from "react-svg";
import ExperienceItemStyled from "./ExperienceItem.styles";

const ExperienceItem = ({
    language,
    icon,
    place,
    time,
    present,
    title,
    type,
    bg,
}) => (
    <ExperienceItemStyled bg={bg}>
        <ReactSVG src={icon} className="icon" />
        <div>
            <p>
                {type[language]} - {time} {present && " - Present"}
            </p>
            <h3>{title}</h3>
            <strong>{place}</strong>
        </div>
    </ExperienceItemStyled>
);

export default ExperienceItem;
