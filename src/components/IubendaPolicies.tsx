import React, { useEffect } from 'react';

const IubendaPolicies = () => {
  useEffect(() => {
    const loadIubendaScript = (src: string) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      document.body.appendChild(script);
    };

    loadIubendaScript('https://cdn.iubenda.com/iubenda.js');
  }, []);

  return (
    <React.Fragment>
      <a href="https://www.iubenda.com/privacy-policy/40866936" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Privacy Policy">Privacy Policy</a>
      <script type="text/javascript">
        {(function (w, d) {
          var loader = function () {
            var s = d.createElement('script'), tag = d.getElementsByTagName('script')[0];
            s.src = 'https://cdn.iubenda.com/iubenda.js';
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener('load', loader, false);
          } else if (w.attachEvent) {
            w.attachEvent('onload', loader);
          } else {
            w.onload = loader;
          }
        })(window, document)}
      </script>
      <a href="https://www.iubenda.com/privacy-policy/40866936/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Cookie Policy">Cookie Policy</a>
      <script type="text/javascript">
        {(function (w, d) {
          var loader = function () {
            var s = d.createElement('script'), tag = d.getElementsByTagName('script')[0];
            s.src = 'https://cdn.iubenda.com/iubenda.js';
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener('load', loader, false);
          } else if (w.attachEvent) {
            w.attachEvent('onload', loader);
          } else {
            w.onload = loader;
          }
        })(window, document)}
      </script>
    </React.Fragment>
  );
};

export default IubendaPolicies;
