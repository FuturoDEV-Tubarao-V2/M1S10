export function Input({ prefix, ...rest }) {
    return (
        <div>
            <label>{prefix}</label>{' '}
            <input {...rest} />
        </div>
    )
}