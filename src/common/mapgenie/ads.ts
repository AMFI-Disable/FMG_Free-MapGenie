import waitUntil from "async-wait-until";

type AdBlockerElement = JQuery | HTMLElement | string | null;

export default class MapgenieAdBlocker {
  private static readonly REMOVE_CHECK_INTERVAL = 500;
  private static readonly TIMEOUT: number = 10000;

  public static lastAdRemovedAt: number = Date.now();
  public static handle: number | null = null;
  public static autoStop: boolean = true;

  private static removeElement(element: AdBlockerElement): boolean {
    if (!element) return false;

    if (element instanceof HTMLElement) {
      element.remove();
      return true;
    }

    if (typeof element === "string") {
      return $(element).remove().length > 0;
    }

    return element.remove().length > 0;
  }

  private static removeElements(elements: AdBlockerElement[]): boolean;
  private static removeElements(...elements: AdBlockerElement[]): boolean;
  private static removeElements(
    ...elements: AdBlockerElement[] | AdBlockerElement[][]
  ): boolean {
    return elements.reduce((acc, el) => {
      if (Array.isArray(el)) {
        return acc || MapgenieAdBlocker.removeElements.apply(MapgenieAdBlocker, el);
      }
      return acc || MapgenieAdBlocker.removeElement(el);
    }, false);
  }

  private static removeIframeAds() {
    return MapgenieAdBlocker.removeElements('iframe[name^="ifrm_"]');
  }

  private static removeGoogleAds() {
    return MapgenieAdBlocker.removeElements(
      'iframe[name*="goog"]',
      'div[class^="adsbygoogle"]',
      'div[id^="google_ads_iframe_"]',
      'iframe[src*="safeframe.googlesyndication"]'
    );
  }

  private static removeNitroAds() {
    return MapgenieAdBlocker.removeElements("#nitro-floating-wrapper");
  }

  private static removeBodyAds() {
    return MapgenieAdBlocker.removeElements(
      'html > iframe[sandbox="allow-scripts allow-same-origin"]'
    );
  }

  private static removeUpgradeProAd() {
    return MapgenieAdBlocker.removeElements("#blobby-left");
  }

  private static removeUpgradeProButton() {
    return MapgenieAdBlocker.removeElements("#button-upgrade");
  }

  private static removeBlueKai() {
    return MapgenieAdBlocker.removeElements('iframe[name="__bkframe"]');
  }

  private static removePrivacyPopupElement() {
    return MapgenieAdBlocker.removeElements("#onetrust-consent-sdk");
  }

  private static removeAds() {
    return [
      MapgenieAdBlocker.removeUpgradeProAd(),
      MapgenieAdBlocker.removeUpgradeProButton(),
      MapgenieAdBlocker.removeIframeAds(),
      MapgenieAdBlocker.removeGoogleAds(),
      MapgenieAdBlocker.removeNitroAds(),
      MapgenieAdBlocker.removeBodyAds(),
      MapgenieAdBlocker.removeBlueKai(),
    ].some((x) => x);
  }

  private static tick() {
    const adsRemoved = MapgenieAdBlocker.removeAds();

    if (adsRemoved) {
      MapgenieAdBlocker.lastAdRemovedAt = Date.now();
    }

    const now = Date.now();
    const elapsed = now - MapgenieAdBlocker.lastAdRemovedAt;

    if (elapsed > MapgenieAdBlocker.TIMEOUT) {
      logger.debug(
        `AdBlocker stopped after ${MapgenieAdBlocker.TIMEOUT}ms of no ads being removed.`
      );
      MapgenieAdBlocker.stop();
      return;
    }
  }

  private static stop() {
    if (!MapgenieAdBlocker.handle) return;
    window.clearInterval(MapgenieAdBlocker.handle);
    MapgenieAdBlocker.handle = null;
  }

  public static start() {
    if (MapgenieAdBlocker.handle != null) return;
    MapgenieAdBlocker.handle = window.setInterval(
      () => MapgenieAdBlocker.tick(),
      MapgenieAdBlocker.REMOVE_CHECK_INTERVAL
    );
  }

  public static cancel() {
    MapgenieAdBlocker.stop();
  }

  /**
   * Removes the privacy popup element in development mode.
   */
  public static async removePrivacyPopup() {
    if (!import.meta.env.DEV) return;

    try {
      await waitUntil(() => !!MapgenieAdBlocker.removePrivacyPopupElement());
    } catch {
      // Ignore timeout
    }
  }
}
