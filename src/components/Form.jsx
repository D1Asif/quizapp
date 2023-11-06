/* eslint-disable react/prop-types */
import classes from '../styles/Form.module.css'

export default function Form({children, className, ...rest}) {
    return (
        <form className={`${className} ${classes.form}`} action="#" {...rest}>
            {children}
        </form>
    )
}