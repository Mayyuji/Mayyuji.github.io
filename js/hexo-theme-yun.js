/* global Yun, CONFIG */

Yun.boot = {
  /**
   * ζΎη€Ίηζ
   */
  copyright() {
    console.log(
      `%c πζ­εδ½ εη°δΊη»ζη§ε―π %c ε₯ε±ζ― : ζ²‘ζπ`,
      'color: white; background: #8DADFC; padding:5px 0;',
      'padding:4px;border:1px solid #8DADFC;'
    )
  },
}

function initPage() {
  Yun.utils.registerToggleSidebar()
  Yun.utils.registerScrollPercent()

  Yun.utils.insertCopyCodeBtn()
  Yun.utils.wrapTable()
}

Yun.boot.copyright()
document.addEventListener('DOMContentLoaded', initPage)
