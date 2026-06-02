const monochromeIcons = new Set([
  '/tech/cv.svg',
  '/tech/express.svg',
  '/tech/github.svg',
  '/tech/mail.svg',
  '/tech/sqlite.svg',
  '/tech/css.svg',
  '/tech/docker.svg',
  '/tech/git.svg',
  '/tech/go.svg',
  '/tech/html.svg',
  '/tech/java.svg',
  '/tech/javascript.svg',
  '/tech/kotlin.svg',
  '/tech/mysql.svg',
  '/tech/node.svg',
  '/tech/postgresql.svg',
  '/tech/python.svg',
  '/tech/react.svg',
  '/tech/vite.svg',
  '/tech/sequelize.svg'
])

export function isMonochromeIcon(iconPath = '') {
  return monochromeIcons.has(iconPath)
}
