
/* SpotFix Star Rating & Resolution Feedback Modal */
window.SpotFixRating = {
  openModal: function(complaintId) {
    let modal = document.getElementById('rating-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'rating-modal';
      modal.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(5px); z-index:10000; display:flex; align-items:center; justify-content:center;';
      modal.innerHTML = `
        <div style="background:var(--card-bg, #1e293b); color:var(--text, #fff); border-radius:16px; padding:24px; max-width:400px; width:90%; box-shadow:0 20px 40px rgba(0,0,0,0.5);">
          <h3>⭐ Rate Issue Resolution</h3>
          <p style="font-size:13px; color:#94a3b8;">How satisfied are you with the municipal repair quality for complaint <strong id="rating-complaint-id"></strong>?</p>
          <div style="font-size:28px; display:flex; gap:10px; justify-content:center; margin:16px 0; cursor:pointer;" id="star-container">
            <span data-star="1">★</span><span data-star="2">★</span><span data-star="3">★</span><span data-star="4">★</span><span data-star="5">★</span>
          </div>
          <textarea id="rating-feedback-text" placeholder="Write any comments or feedback for the repair crew..." style="width:100%; height:80px; border-radius:8px; padding:8px; border:1px solid #334155; background:rgba(0,0,0,0.2); color:#fff; font-family:inherit; margin-bottom:16px;"></textarea>
          <div style="display:flex; justify-content:flex-end; gap:10px;">
            <button class="btn btn-ghost" onclick="document.getElementById('rating-modal').style.display='none'">Cancel</button>
            <button class="btn btn-primary" id="btn-submit-rating">Submit Rating</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelectorAll('#star-container span').forEach(star => {
        star.addEventListener('click', (e) => {
          const rating = e.target.getAttribute('data-star');
          modal.querySelectorAll('#star-container span').forEach((s, idx) => {
            s.style.color = (idx < rating) ? '#f59e0b' : '#475569';
          });
          modal.setAttribute('data-selected-rating', rating);
        });
      });

      modal.querySelector('#btn-submit-rating').addEventListener('click', () => {
        const rating = modal.getAttribute('data-selected-rating') || '5';
        modal.style.display = 'none';
        if (window.SpotFixToast) SpotFixToast.show('Thank you! Submitted ' + rating + '★ rating.', 'success');
      });
    }
    document.getElementById('rating-complaint-id').textContent = complaintId;
    modal.style.display = 'flex';
  }
};
