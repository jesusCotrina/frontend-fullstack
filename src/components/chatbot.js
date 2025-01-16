import React, { useEffect } from 'react';

const VoiceflowWidget = () => {
    useEffect(() => {
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '672c289a1c5d8c6677a5b5e6' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    }, []);
  
    return null;
  };
  
export default VoiceflowWidget;