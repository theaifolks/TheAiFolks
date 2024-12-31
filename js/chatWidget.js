(() => {
    const _0x2b1575 = document.getElementById("vectorshift-chat-widget") || document.getElementById("vectorshift-widget");
    const _0x4758e1 = _0x2b1575.getAttribute("chatbot-id") || _0x2b1575.getAttribute("object-id");
    const _0x1ec90f = _0x2b1575.getAttribute('chatbot-env') || _0x2b1575.getAttribute("object-env");
    const _0x13644f = _0x2b1575.getAttribute('chatbot-height') || _0x2b1575.getAttribute("object-height");
    const _0x5dea9f = _0x2b1575.getAttribute('chatbot-width') || _0x2b1575.getAttribute("object-width");
    const _0x21d4b1 = _0x2b1575.getAttribute("object-variant");
    if (!_0x4758e1) {
      console.error("No object ID provided");
      return;
    }
    let _0x476997 = "https://api.vectorshift.ai/chatbots/deployed/" + _0x4758e1;
    let _0x43ba77 = "https://app.vectorshift.ai/chatbots/deployed/" + _0x4758e1 + "?isEmbed=true";
    if (_0x1ec90f === 'DEV') {
      _0x476997 = "https://dev-api.vectorshift.ai/chatbots/deployed/" + _0x4758e1;
      _0x43ba77 = "https://dev-app.vectorshift.ai/chatbots/deployed/" + _0x4758e1 + "?isEmbed=true";
    } else if (_0x1ec90f === "LOCAL") {
      _0x476997 = 'http://localhost:8000/chatbots/deployed/' + _0x4758e1;
      _0x43ba77 = 'http://localhost:3000/chatbots/deployed/' + _0x4758e1 + "?isEmbed=true";
    }
    if (_0x21d4b1) {
      const _0x36458d = ["voicebots"];
      if (_0x36458d.includes(_0x21d4b1)) {
        _0x476997 = _0x476997.replace("chatbots", _0x21d4b1);
        _0x43ba77 = _0x43ba77.replace("chatbots", _0x21d4b1);
      }
    }
    const _0x1e6408 = async () => {
      try {
        const _0x1640ba = await fetch(_0x476997);
        if (!_0x1640ba.ok) {
          throw new Error("Network response was not ok");
        }
        const _0x4df863 = await _0x1640ba.json();
        _0x4bb84d(_0x4df863);
      } catch (_0x42a5b9) {
        console.error("Error fetching chatbot data:", _0x42a5b9);
      }
    };
    const _0x4bb84d = _0x247d49 => {
      const _0x4a5984 = document.createElement('div');
      const _0x691d3c = document.createElement("iframe");
      let _0x3aed01;
      let _0x37e414;
      if (_0x247d49 && _0x247d49?.['deploymentOptions'] && _0x247d49?.['deploymentOptions']?.['chatBubbleUrl']) {
        const _0x1ce025 = _0x247d49?.['deploymentOptions']?.['chatBubbleUrl'] || '';
        _0x3aed01 = document.createElement("img");
        _0x3aed01.src = typeof _0x1ce025 === "string" ? _0x1ce025 : _0x1ce025?.["url"];
        _0x3aed01.alt = "Chat launcher";
        _0x37e414 = _0x3aed01.style;
        _0x37e414.height = "auto";
      } else {
        _0x3aed01 = document.createElement("button");
        _0x37e414 = _0x3aed01.style;
        _0x37e414.height = "50px";
        _0x37e414.borderRadius = "9999px";
        _0x37e414.background = _0x247d49.deploymentOptions.accentColor || "black";
        _0x37e414.display = 'flex';
        _0x37e414.alignItems = "center";
        _0x37e414.justifyContent = 'center';
        const _0x412f0e = document.createElement("div");
        _0x412f0e.style.display = "flex";
        _0x412f0e.style.alignItems = "center";
        _0x412f0e.style.justifyContent = "center";
        _0x412f0e.innerHTML = "\n      <svg class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1d159sf-MuiSvgIcon-root\" focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"ChatBubbleRoundedIcon\" width=\"24\" height=\"24\" fill=\"white\">\n        <path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2\"></path>\n      </svg>\n      ";
        _0x3aed01.appendChild(_0x412f0e);
      }
      _0x37e414.width = "50px";
      _0x37e414.position = "fixed";
      _0x37e414.bottom = '20px';
      _0x37e414.right = "20px";
      _0x37e414.cursor = "pointer";
      _0x37e414.display = "none";
      _0x37e414.zIndex = "999999999999999999";
      const _0x4ea5dd = _0x4a5984.style;
      _0x4ea5dd.display = "none";
      _0x4ea5dd.boxSizing = "border-box";
      _0x4ea5dd.width = _0x5dea9f || "400px";
      _0x4ea5dd.height = _0x13644f || "600px";
      _0x4ea5dd.position = 'fixed';
      _0x4ea5dd.bottom = -_0x13644f || "-600px";
      _0x4ea5dd.right = "10px";
      _0x4ea5dd.borderRadius = '12px';
      _0x4ea5dd.zIndex = "999999999999999999";
      _0x4ea5dd.transition = "bottom 0.3s ease-in-out";
      const _0x21205a = _0x691d3c.style;
      _0x21205a.boxSizing = 'borderBox';
      _0x21205a.position = "absolute";
      _0x21205a.right = 0x0;
      _0x21205a.bottom = 0x0;
      _0x21205a.width = "100%";
      _0x21205a.height = '100%';
      _0x21205a.margin = 0x0;
      _0x21205a.padding = 0x0;
      _0x21205a.borderRadius = "12px";
      _0x21205a.width = _0x5dea9f || "400px";
      _0x21205a.zIndex = "999999999999999999";
      _0x691d3c.setAttribute("allow", "clipboard-read; clipboard-write;microphone");
      _0x691d3c.addEventListener("load", () => {
        if (_0x247d49?.["deploymentOptions"]?.["chatOpen"]) {
          _0x4ea5dd.display = 'block';
          setTimeout(() => {
            _0x4ea5dd.bottom = "5px";
          }, 0xa);
        } else {
          _0x37e414.display = 'inline';
        }
      });
      window.addEventListener('message', _0x588e47 => {
        if (_0x588e47.data === "closeWidget") {
          _0x4ea5dd.bottom = "-647px";
          setTimeout(() => {
            _0x4ea5dd.display = "none";
          }, 0xc8);
          _0x37e414.display = "inline";
        }
      });
      _0x3aed01.addEventListener("click", () => {
        _0x4ea5dd.display = "block";
        setTimeout(() => {
          _0x4ea5dd.bottom = '5px';
        }, 0xa);
        _0x37e414.display = 'none';
      });
      _0x4a5984.appendChild(_0x691d3c);
      _0x691d3c.src = _0x43ba77;
      document.body.appendChild(_0x4a5984);
      document.body.appendChild(_0x3aed01);
    };
    if (document.readyState === "complete") {
      _0x1e6408();
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          _0x1e6408();
        }
      });
    }
  })();