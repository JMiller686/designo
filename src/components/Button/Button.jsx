import './Button.scss';

const Button = ({linkUrl, btnLight, children}) => {
    return (
        <a className={`btn ${btnLight ? 'btn-light' : 'btn-dark'}`} href={linkUrl}>{children}</a>
    )
}

export default Button
