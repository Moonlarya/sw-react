import ApiService from "./ApiService";

class PlanetService extends ApiService {
  async getAll(
    page: number
  ): Promise<{
    count: number;
    next: string;
    previous?: any;
    results: IPlanet[];
  }> {
    const response = await this.api({
      method: "get",
      url: "/planets/",
      params: {
        page,
      },
    });

    return response.data;
  }
}

export default new PlanetService();
