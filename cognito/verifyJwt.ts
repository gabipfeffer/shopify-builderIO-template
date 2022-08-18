import jwt from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'
import axios from 'axios'
import awsConfig from '@config/aws'

const fetchJWKs = async () => {
  const pems: any = {}
  const jwksUrl = `https://cognito-idp.${awsConfig.region}.amazonaws.com/${awsConfig.cognitoUserPoolId}/.well-known/jwks.json`
  try {
    const { data } = await axios.get(jwksUrl)

    const { keys } = data
    keys.forEach(({ kty, kid, n, e }: any) => {
      pems[kid] = jwkToPem({ kty, n, e })
    })

    return pems
  } catch (e) {
    throw Error('Error processing JWKs')
  }
}

export const jwtAuth = async (token: string) => {
  if (!token) {
    return Promise.reject('Unauthorized')
  }

  try {
    const decoded = jwt.decode(token, { complete: true })

    // @ts-ignore
    const { kid } = decoded?.header
    const pems = await fetchJWKs()
    const pem = pems[kid]

    if (!pem) {
      return Promise.reject('Unauthorized')
    }

    return new Promise((resolve, reject) => {
      jwt.verify(token, pem, (err: any, payload: any) => {
        if (err) {
          return reject('Unauthorized')
        }
        return resolve(payload)
      })
    })
  } catch (err) {
    return Promise.reject('Unauthorized')
  }
}
