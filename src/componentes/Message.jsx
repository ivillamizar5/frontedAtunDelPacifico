export const Message = ({ msg, bgColor = "alert-danger" }) => {
    console.log("mensaje 2 ", msg)
    return (
        <div className={`alert ${bgColor} text-center fw-semibold`} role="alert">
        {msg}
        </div>
    );
}