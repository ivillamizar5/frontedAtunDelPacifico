export const Message = ({ msg, bgColor = "bg-danger", color = "text-white" }) => {
    console.log("mensaje 2 ", msg)
    return (
        <div className={`alert ${bgColor} ${color} text-center fw-semibold`}>
        {msg}
        </div>
    );
}