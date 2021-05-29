const baseUri = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''

export const uri = {
  account: `${baseUri}/account`
}
