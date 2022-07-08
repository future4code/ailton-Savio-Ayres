import axios from 'axios'

export const getProfile = async (setProfile, setLoading) => {
  try {
    const response = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/savio/person'
    )
    setProfile(response.data.profile)
    // setLoading(false)
  } catch (error) {
    console.log(error)
  }
}
