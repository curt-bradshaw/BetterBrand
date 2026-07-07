(function () {
  if (!document.body.classList.contains('template-product')) return;

  function getTrustpilotSections() {
    return Array.prototype.filter.call(
      document.querySelectorAll('.shopify-section'),
      function (section) {
        return !!section.querySelector(
          '.shopify-app-block[id*="trustpilot"], .apps-section--trustpilot, .trustpilot-widget'
        );
      }
    );
  }

  function trustpilotHasVisibleContent(section) {
    var widgets = section.querySelectorAll('.trustpilot-widget');

    for (var i = 0; i < widgets.length; i++) {
      var widget = widgets[i];
      var widgetStyle = window.getComputedStyle(widget);

      if (widgetStyle.display === 'none' || widgetStyle.visibility === 'hidden') {
        continue;
      }

      var iframe = widget.querySelector('iframe');
      if (iframe && iframe.offsetHeight > 0) {
        return true;
      }
    }

    var iframes = section.querySelectorAll('iframe[src*="trustpilot"], iframe[src*="trustbox"]');
    for (var j = 0; j < iframes.length; j++) {
      var frame = iframes[j];
      var frameStyle = window.getComputedStyle(frame);

      if (frame.offsetHeight > 0 && frameStyle.display !== 'none' && frameStyle.visibility !== 'hidden') {
        return true;
      }
    }

    return false;
  }

  function trustpilotIsReady(section) {
    var widgets = section.querySelectorAll('.trustpilot-widget');

    for (var i = 0; i < widgets.length; i++) {
      var widgetStyle = window.getComputedStyle(widgets[i]);
      if (widgetStyle.display === 'none') return true;
      if (widgets[i].querySelector('iframe')) return true;
    }

    return !!section.querySelector('iframe[src*="trustpilot"], iframe[src*="trustbox"]');
  }

  function collapseTrustpilotSection(section) {
    section.classList.add('is-trustpilot-empty');
    section.hidden = true;
    section.style.setProperty('display', 'none', 'important');
    section.style.setProperty('min-height', '0', 'important');
    section.style.setProperty('height', '0', 'important');
    section.style.setProperty('padding', '0', 'important');
    section.style.setProperty('margin', '0', 'important');
    section.style.setProperty('overflow', 'hidden', 'important');

    section.querySelectorAll('.shopify-app-block, .apps-section, .trustpilot-widget').forEach(function (el) {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('min-height', '0', 'important');
      el.style.setProperty('height', '0', 'important');
      el.style.setProperty('padding', '0', 'important');
      el.style.setProperty('margin', '0', 'important');
      el.style.setProperty('overflow', 'hidden', 'important');
    });
  }

  function showTrustpilotSection(section) {
    section.classList.remove('is-trustpilot-empty');
    section.hidden = false;
    section.style.removeProperty('display');
    section.style.removeProperty('min-height');
    section.style.removeProperty('height');
    section.style.removeProperty('padding');
    section.style.removeProperty('margin');
    section.style.removeProperty('overflow');

    section.querySelectorAll('.shopify-app-block, .apps-section, .trustpilot-widget').forEach(function (el) {
      el.style.removeProperty('display');
      el.style.removeProperty('min-height');
      el.style.removeProperty('height');
      el.style.removeProperty('padding');
      el.style.removeProperty('margin');
      el.style.removeProperty('overflow');
    });
  }

  function updateTrustpilotSections(force) {
    getTrustpilotSections().forEach(function (section) {
      if (!force && !trustpilotIsReady(section)) return;

      if (trustpilotHasVisibleContent(section)) {
        showTrustpilotSection(section);
      } else {
        collapseTrustpilotSection(section);
      }
    });
  }

  function initTrustpilotSectionWatcher() {
    updateTrustpilotSections(false);

    new MutationObserver(function () {
      updateTrustpilotSections(false);
    }).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'hidden']
    });

    var attempts = 0;
    var interval = setInterval(function () {
      updateTrustpilotSections(attempts >= 10);
      attempts += 1;
      if (attempts >= 40) clearInterval(interval);
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTrustpilotSectionWatcher);
  } else {
    initTrustpilotSectionWatcher();
  }
})();
