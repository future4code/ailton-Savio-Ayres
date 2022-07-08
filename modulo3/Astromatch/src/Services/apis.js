import axios from 'axios'

export const getProfile = async (setProfile) => {
  try {
    const response = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/savio/person'
    )
    setProfile(response.data.profile)
  } catch (error) {
    console.log(error)
  }
}

export const getMatches = async (setMatches) => {
  try {
    const response = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/savio/matches'
    )
    setMatches(response.data.matches)
    console.log('teste', response.data.matches)
  } catch (error) {
    console.log(error)
  }
}

export const choiceProfile = async (id, choice, setProfile) => {
  try {
    const body = {
      id: id,
      choice: choice
    }
    await axios.post(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/savio/choose-person',
      body
    )

    getProfile(setProfile)
  } catch (error) {
    console.log(error)
  }
}

export const clear = async () => {
  try {
    await axios.put(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/savio/clear'
    )
  } catch (error) {
    console.log(error)
  }
}
