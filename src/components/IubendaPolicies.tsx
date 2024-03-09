import React, { useEffect } from 'react';

const IubendaPolicies = () => {
  useEffect(() => {
    const loadIubendaScript = (src: string) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      var tag = document.getElementsByTagName('script')[0];
      if (tag && tag.parentNode) {
        tag.parentNode.insertBefore(script, tag);
      } else {
        document.body.appendChild(script);
      }
    };

    loadIubendaScript('https://cdn.iubenda.com/iubenda.js');
  }, []);

  return (
    <React.Fragment>
      <a href="https://www.iubenda.com/privacy-policy/40866936" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Privacy Policy">Privacy Policy</a>
      
      <a href="https://www.iubenda.com/privacy-policy/40866936/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Cookie Policy">Cookie Policy</a>
      
    </React.Fragment>
  );
};

export default IubendaPolicies;
