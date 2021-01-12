import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './Comment.css';
import { updateComment, deleteComment } from '../../JS/actions/Publication';
const Comment = ({ comment, idprofile, user }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [commentAdded, setCommentAdded] = useState('');
	const dispatch = useDispatch();
	return (
		<div>
			<ul className="list">
				<li className="reservations">
					<div className="Details">
						<button className="Detail" onClick={handleShow}>
							<span className="w3-center">{comment.comments.length} Comments</span>
						</button>
					</div>
					<Modal className="ModalMain" show={show}>
						<Modal.Body>
							{comment.publicationPhoto && comment.publication ? (
								<div>
									<h3 style={{ fontFamily: 'serif' }}>{comment.publication}</h3>
									<img style={{ width: '50%' }} src={comment.publicationPhoto} alt="" />
								</div>
							) : comment.publication ? (
								<h3 style={{ fontFamily: 'serif' }}>{comment.publication}</h3>
							) : (
								<img style={{ width: '50%' }} src={comment.publicationPhoto} alt="" />
							)}
							<p>
								{comment.comments.map((el) => (
									<div
										style={{
											backgroundColor: 'white',
											width: '100%',
											border: '3px solid cornflowerblue',
										}}
									>
										<p className="w3-left" style={{ marginLeft: '3%' }}>
											{el.userName} {el.userLastName}
										</p>
										{user._id === comment.userId ||
										user._id === el.userIdCommented ||
										user.role === 'Admin' ? (
											<button
												className="w3-right"
												onClick={() =>
													dispatch(
														deleteComment(comment._id, { commentId: el._id }, idprofile)
													)
												}
											>
												<i className="far fa-trash-alt"></i>
											</button>
										) : null}
										<br />
										<p
											className="w3-center"
											style={{
												color: '#4b4f56',
												fontFamily: 'Helvetica, Arial, sans-serif',
												marginRight: '2%',
											}}
										>
											{el.comment}
										</p>
									</div>
								))}
								<input
									placeholder="Add a comment..."
									style={{ width: '90%' }}
									value={commentAdded}
									onChange={(e) => {
										setCommentAdded(e.target.value);
									}}
								/>
								<input
									type="submit"
									onClick={() => {
										dispatch(
											updateComment(comment._id, { comments: commentAdded }, comment.profileId)
										);
										setCommentAdded('');
									}}
								/>
							</p>
						</Modal.Body>
						<Modal.Footer className="modalFooter">
							<button className="ModalBtn ModalBtn3" onClick={handleClose}>
								Close
							</button>
						</Modal.Footer>
					</Modal>
				</li>
			</ul>
		</div>
	);
};
export default Comment;
