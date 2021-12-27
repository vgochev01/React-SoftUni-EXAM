import './DeleteModal.scss';

export default function DeleteModal ( { setDeleteConfirmed, setShowDeleteModal }) {
    
    return (
        <>
            <div className="delete-modal-container">
                <div className='modal'>
                    <h1>Are you sure want to delete your job offer?</h1>
                    <button onClick={() => setDeleteConfirmed(true)} className='confirmBtn'>Confirm</button>
                    <button onClick={() => setShowDeleteModal(false)} className='cancelBtn'>Cancel</button>
                </div>
            </div>
        </>
    )
}