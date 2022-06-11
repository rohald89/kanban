const Button = ({type = 'submit', className = '', loading, children }) => {
  return (
    <button
    type={type}
    className={className}
    disabled={loading}
    >
        {children}
    </button>
  )
}
export default Button
