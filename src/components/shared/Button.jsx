const Button = ({type = 'submit', className = '', onClick, loading, children }) => {
  return (
    <button
    onClick={onClick}
    type={type}
    className={className}
    disabled={loading}
    >
        {children}
    </button>
  )
}
export default Button
