import ProjectCardWrapStyles from './ProjectCardWrap.module.scss'

const ProjectCardWrap = ({children}) => {
    return (
        <div className={ProjectCardWrapStyles.cardWrap}>
            {children}
        </div>
    )
}

export default ProjectCardWrap
