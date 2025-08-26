describe('首页测试', () => {
  beforeEach(() => {
    // 每个测试前访问首页
    cy.visit('http://localhost:3003')
  })

  it('应该显示首页标题', () => {
    // 检查页面是否包含特定文本
    cy.contains('首页').should('be.visible')
  })

  it('应该能够点击导航链接', () => {
    // 点击导航链接
    cy.get('[data-testid="nav-link"]').click()

    // 验证URL变化
    cy.url().should('include', '/about')
  })
})