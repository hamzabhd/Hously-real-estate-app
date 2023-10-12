export function getUserName(email: string): string {
  const userName = email.split('@')[0]

  return userName.toLocaleLowerCase()
}
