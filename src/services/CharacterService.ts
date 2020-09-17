import ApiService from "./ApiService";
import axios from "axios";

class CharacterService extends ApiService {
  async getAll(episode) {
    const response = await this.api({ url: `/films/${episode}/` });

    return Promise.all(
      response.data.characters.map((el) =>
        axios.get(el.replace("http", "https")).then((response) => ({
          name: response.data.name,
          birth_year: response.data.birth_year,
          gender: response.data.gender,
        }))
      )
    );
  }
}

export default new CharacterService();
