const DeletePopup = props => {
    return (
        <div className="delete-popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
}
 
export default DeletePopup;