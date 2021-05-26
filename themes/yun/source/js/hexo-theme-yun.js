/* global Yun, CONFIG */

Yun.boot = {
  /**
   * 显示版权
   */
  copyright() {
    console.log(
      `%c 🎉恭喜你发现了终极秘密🎉 %c 奖励是 : 没有😑`,
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
