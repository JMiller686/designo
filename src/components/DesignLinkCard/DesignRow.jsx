import './DesignRow.scss';

const DesignRow = ({page, children}) => {
    return (
        <div className={`design-row ${page}`}>
            {children}
        </div>
    )
}

export default DesignRow
