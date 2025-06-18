export const Message = ({ msg, bgColor = "bg-danger", color = "text-white" }) => {
    return (
        <div className={`alert ${bgColor} ${color} text-center fw-semibold`}>
        {msg}
        </div>
    );
}