import './DeleteModal.scss';

export default function DeleteModal ( { setDeleteConfirmed }) {
    return (
        <>
            <div className="delete-modal-container">
                <div className='modal'>
                    <h1>Are you sure want to delete your job offer?</h1>
                    <button className='confirmBtn'>Confirm</button>
                    <button className='cancelBtn'>Cancel</button>
                </div>
            </div>
        </>
    )
}