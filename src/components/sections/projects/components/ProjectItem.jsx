import { BsClockHistory, BsEyeFill, BsGithub } from "react-icons/bs";

import ProjectItemStyled from "./ProjectItem.styles";

const ProjectItem = ({
    title,
    image,
    category,
    accent,
    time,
    repo,
    link,
    tags,
    viewText,
}) => {
    return (
        <ProjectItemStyled accent={accent}>
            <p className="category">{category}</p>
            <img
                className="cover"
                src={image}
                alt={title}
                width="100%"
                height="100%"
            />
            <section className="bottom-part">
                <p className="time">
                    <BsClockHistory /> {time}
                </p>
                <h2>{title}</h2>
                <div className="links">
                    <a
                        className="view"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View site (external)">
                        <BsEyeFill size={"1.35rem"} />
                        <span>{viewText}</span>
                    </a>

                    {repo && (
                        <a
                            className="repo"
                            href={repo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Github repo (external)">
                            <BsGithub size={"1.35rem"} />
                            <span>REPO</span>
                        </a>
                    )}
                </div>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag.text}</span>
                    ))}
                </div>
            </section>
        </ProjectItemStyled>
    );
};

export default ProjectItem;
