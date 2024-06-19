const BASE_URL = 'https://signnary.shariyl.cloud/';

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data: FormData) {
    try {
      const response = await fetch(ENDPOINT.predict, {
        method: 'POST',
        body: data,
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(`Error predicting: ${error.message}`);
    }
  }
}

export default PredictAPI;
