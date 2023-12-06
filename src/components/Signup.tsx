import React from 'react';

const Signup = () => (
  <div id="mc_embed_signup">
    <form action="https://dev.us13.list-manage.com/subscribe/post?u=c82a61199a42029425a34355b&amp;id=729f76235c&amp;f_id=00f0bee5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-FNAME">First Name </label>
          <input type="text" name="FNAME" className=" text" id="mce-FNAME" value="" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
        <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
          <input type="text" name="b_c82a61199a42029425a34355b_729f76235c" tabIndex="-1" value="" />
        </div>
        <div className="clear">
          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
        </div>
      </div>
    </form>
  </div>
);

export default Signup;
