import axios from 'axios'

export const labexApi = axios.create({
  baseURL:
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/savio-ayres-ailton'
})

export const setAuthToken = (token) => {
  labexApi.defaults.headers.common['auth'] = token
}
