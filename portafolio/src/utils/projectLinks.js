export function getProjectActionLinks(links) {
  const actionLinks = []

  if (links?.demo) {
    actionLinks.push({
      key: 'demo',
      label: 'Demo en vivo',
      href: links.demo,
      variant: 'primary',
    })
  }

  if (Array.isArray(links?.repositories) && links.repositories.length > 0) {
    links.repositories.forEach((repository, index) => {
      actionLinks.push({
        key: repository.key ?? `repo-${index}`,
        label: repository.label ?? 'Repositorio',
        href: repository.href ?? '#',
        variant: 'secondary',
      })
    })

    return actionLinks
  }

  if (links?.repo) {
    actionLinks.push({
      key: 'repo',
      label: 'Repositorio',
      href: links.repo,
      variant: 'secondary',
    })
  }

  return actionLinks
}
