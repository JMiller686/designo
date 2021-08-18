import ProjectCardStyles from './ProjectCard.module.scss';

const ProjectCard = ({imgUrl, title, description}) => {
    return (
        <div className={ProjectCardStyles.projectCard}>
            <div className={ProjectCardStyles.projectCardImg}>
                <img src={imgUrl} alt={title} />
            </div>
            <div className={ProjectCardStyles.projectCardContent}>
                <p className={ProjectCardStyles.title}>{title}</p>
                <p className={ProjectCardStyles.description}>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
